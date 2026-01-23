// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateStandardLookupTableRequestCreateCommandDirectoryReference extends $dara.Model {
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

export class CreateStandardLookupTableRequestCreateCommandLookupTableValueList extends $dara.Model {
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

export class CreateStandardLookupTableRequestCreateCommand extends $dara.Model {
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
  directoryReference?: CreateStandardLookupTableRequestCreateCommandDirectoryReference;
  lookupTableValueList?: CreateStandardLookupTableRequestCreateCommandLookupTableValueList[];
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
      lookupTableValueList: 'LookupTableValueList',
      name: 'Name',
      owner: 'Owner',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      description: 'string',
      directoryReference: CreateStandardLookupTableRequestCreateCommandDirectoryReference,
      lookupTableValueList: { 'type': 'array', 'itemType': CreateStandardLookupTableRequestCreateCommandLookupTableValueList },
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

export class CreateStandardLookupTableRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  createCommand?: CreateStandardLookupTableRequestCreateCommand;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      createCommand: 'CreateCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createCommand: CreateStandardLookupTableRequestCreateCommand,
      opTenantId: 'number',
    };
  }

  validate() {
    if(this.createCommand && typeof (this.createCommand as any).validate === 'function') {
      (this.createCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

