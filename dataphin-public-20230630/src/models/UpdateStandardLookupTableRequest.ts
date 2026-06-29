// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateStandardLookupTableRequestUpdateCommandDirectoryReference extends $dara.Model {
  /**
   * @remarks
   * The directory to which the lookup table belongs.
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
   * The code description.
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
   * The code name.
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
   * 杭州
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
   * The lookup table code.
   * 
   * This parameter is required.
   * 
   * @example
   * CITY
   */
  code?: string;
  /**
   * @remarks
   * The lookup table description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The directory to which the lookup table belongs.
   */
  directoryReference?: UpdateStandardLookupTableRequestUpdateCommandDirectoryReference;
  /**
   * @remarks
   * The lookup table ID.
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
   * The lookup table name.
   * 
   * This parameter is required.
   * 
   * @example
   * 城市码表
   */
  name?: string;
  /**
   * @remarks
   * The ID of the lookup table owner. Default value: the user ID of the caller.
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
   * The update command.
   * 
   * This parameter is required.
   */
  updateCommand?: UpdateStandardLookupTableRequestUpdateCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      updateCommand: 'UpdateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
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

