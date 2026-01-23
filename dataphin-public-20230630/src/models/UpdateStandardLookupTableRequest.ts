// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateStandardLookupTableRequestUpdateCommandDirectoryReference extends $dara.Model {
  /**
   * @remarks
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
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * HZ
   */
  englishName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Hangzhou
   */
  name?: string;
  /**
   * @remarks
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
   * This parameter is required.
   * 
   * @example
   * CITY
   */
  code?: string;
  /**
   * @example
   * test
   */
  description?: string;
  directoryReference?: UpdateStandardLookupTableRequestUpdateCommandDirectoryReference;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  id?: number;
  lookupTableValueList?: UpdateStandardLookupTableRequestUpdateCommandLookupTableValueList[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 城市码表
   */
  name?: string;
  /**
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
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
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

