// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStandardLookupTableResponseBodyLookupTableInfoDirectoryReference extends $dara.Model {
  /**
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

export class GetStandardLookupTableResponseBodyLookupTableInfoLookupTableValueList extends $dara.Model {
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
   * @example
   * Hangzhou
   */
  name?: string;
  /**
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

export class GetStandardLookupTableResponseBodyLookupTableInfo extends $dara.Model {
  /**
   * @example
   * CITY
   */
  code?: string;
  /**
   * @example
   * 2025-06-30 00:00:00
   */
  createTime?: string;
  /**
   * @example
   * 30012021
   */
  creator?: string;
  /**
   * @example
   * test
   */
  creatorName?: string;
  /**
   * @example
   * test
   */
  description?: string;
  directoryReference?: GetStandardLookupTableResponseBodyLookupTableInfoDirectoryReference;
  /**
   * @example
   * 1234
   */
  id?: number;
  /**
   * @example
   * 30012021
   */
  lastModifier?: string;
  /**
   * @example
   * test
   */
  lastModifierName?: string;
  lookupTableValueList?: GetStandardLookupTableResponseBodyLookupTableInfoLookupTableValueList[];
  /**
   * @example
   * 2025-06-30 00:00:00
   */
  modifyTime?: string;
  /**
   * @example
   * 城市码表
   */
  name?: string;
  /**
   * @example
   * 30012021
   */
  owner?: string;
  /**
   * @example
   * test
   */
  ownerName?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      createTime: 'CreateTime',
      creator: 'Creator',
      creatorName: 'CreatorName',
      description: 'Description',
      directoryReference: 'DirectoryReference',
      id: 'Id',
      lastModifier: 'LastModifier',
      lastModifierName: 'LastModifierName',
      lookupTableValueList: 'LookupTableValueList',
      modifyTime: 'ModifyTime',
      name: 'Name',
      owner: 'Owner',
      ownerName: 'OwnerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      createTime: 'string',
      creator: 'string',
      creatorName: 'string',
      description: 'string',
      directoryReference: GetStandardLookupTableResponseBodyLookupTableInfoDirectoryReference,
      id: 'number',
      lastModifier: 'string',
      lastModifierName: 'string',
      lookupTableValueList: { 'type': 'array', 'itemType': GetStandardLookupTableResponseBodyLookupTableInfoLookupTableValueList },
      modifyTime: 'string',
      name: 'string',
      owner: 'string',
      ownerName: 'string',
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

export class GetStandardLookupTableResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  lookupTableInfo?: GetStandardLookupTableResponseBodyLookupTableInfo;
  /**
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      lookupTableInfo: 'LookupTableInfo',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      lookupTableInfo: GetStandardLookupTableResponseBodyLookupTableInfo,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.lookupTableInfo && typeof (this.lookupTableInfo as any).validate === 'function') {
      (this.lookupTableInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

