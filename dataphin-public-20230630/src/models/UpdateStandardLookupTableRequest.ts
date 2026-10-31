// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateStandardLookupTableRequestUpdateCommandDirectoryReference extends $dara.Model {
  /**
   * @remarks
   * The parent folder.
   * 
   * This parameter is required.
   * 
   * @example
   * /dir1/dir2
   */
  directory?: string;
  static names(): { [key: string]: string } {
    return {
      directory: 'Directory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directory: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStandardLookupTableRequestUpdateCommandLookupTableValueList extends $dara.Model {
  /**
   * @remarks
   * The description of the code.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The English name of the code.
   * 
   * @example
   * HZ
   */
  englishName?: string;
  /**
   * @remarks
   * The name of the code.
   * 
   * This parameter is required.
   * 
   * @example
   * Hangzhou
   */
  name?: string;
  /**
   * @remarks
   * The code value.
   * 
   * This parameter is required.
   * 
   * @example
   * Hangzhou
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      englishName: 'EnglishName',
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      englishName: 'string',
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStandardLookupTableRequestUpdateCommand extends $dara.Model {
  /**
   * @remarks
   * The code of the lookup table.
   * 
   * This parameter is required.
   * 
   * @example
   * CITY
   */
  code?: string;
  /**
   * @remarks
   * The description of the lookup table.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The parent folder.
   */
  directoryReference?: UpdateStandardLookupTableRequestUpdateCommandDirectoryReference;
  /**
   * @remarks
   * The ID of the lookup table.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  id?: number;
  /**
   * @remarks
   * The list of lookup table values.
   */
  lookupTableValueList?: UpdateStandardLookupTableRequestUpdateCommandLookupTableValueList[];
  /**
   * @remarks
   * The name of the lookup table.
   * 
   * This parameter is required.
   * 
   * @example
   * City lookup table
   */
  name?: string;
  /**
   * @remarks
   * The ID of the lookup table owner. Default value: the ID of the caller.
   * 
   * @example
   * 30012021
   */
  owner?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      description: 'Description',
      directoryReference: 'DirectoryReference',
      id: 'Id',
      lookupTableValueList: 'LookupTableValueList',
      name: 'Name',
      owner: 'Owner',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      description: 'string',
      directoryReference: UpdateStandardLookupTableRequestUpdateCommandDirectoryReference,
      id: 'number',
      lookupTableValueList: { 'type': 'array', 'itemType': UpdateStandardLookupTableRequestUpdateCommandLookupTableValueList },
      name: 'string',
      owner: 'string',
    };
  }

  validate() {
    if(this.directoryReference && typeof (this.directoryReference as any).validate === 'function') {
      (this.directoryReference as any).validate();
    }
    if(Array.isArray(this.lookupTableValueList)) {
      $dara.Model.validateArray(this.lookupTableValueList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStandardLookupTableRequest extends $dara.Model {
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * The ID of the operator.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  /**
   * @remarks
   * The update command.
   * 
   * This parameter is required.
   */
  updateCommand?: UpdateStandardLookupTableRequestUpdateCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
      updateCommand: 'UpdateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      opUserId: 'string',
      updateCommand: UpdateStandardLookupTableRequestUpdateCommand,
    };
  }

  validate() {
    if(this.updateCommand && typeof (this.updateCommand as any).validate === 'function') {
      (this.updateCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

