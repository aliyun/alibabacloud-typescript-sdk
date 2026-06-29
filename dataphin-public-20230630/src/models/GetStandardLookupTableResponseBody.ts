// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStandardLookupTableResponseBodyLookupTableInfoDirectoryReference extends $dara.Model {
  /**
   * @remarks
   * The directory to which the lookup table belongs.
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

export class GetStandardLookupTableResponseBodyLookupTableInfoLookupTableValueList extends $dara.Model {
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
   * @example
   * Hangzhou
   */
  name?: string;
  /**
   * @remarks
   * The code value.
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

export class GetStandardLookupTableResponseBodyLookupTableInfo extends $dara.Model {
  /**
   * @remarks
   * The code of the lookup table.
   * 
   * @example
   * CITY
   */
  code?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-06-30 00:00:00
   */
  createTime?: string;
  /**
   * @remarks
   * The user ID of the creator.
   * 
   * @example
   * 30012021
   */
  creator?: string;
  /**
   * @remarks
   * The username of the creator.
   * 
   * @example
   * test
   */
  creatorName?: string;
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
   * The directory to which the lookup table belongs.
   */
  directoryReference?: GetStandardLookupTableResponseBodyLookupTableInfoDirectoryReference;
  /**
   * @remarks
   * The lookup table ID.
   * 
   * @example
   * 1234
   */
  id?: number;
  /**
   * @remarks
   * The user ID of the last modifier.
   * 
   * @example
   * 30012021
   */
  lastModifier?: string;
  /**
   * @remarks
   * The username of the last modifier.
   * 
   * @example
   * test
   */
  lastModifierName?: string;
  /**
   * @remarks
   * The list of lookup table values.
   */
  lookupTableValueList?: GetStandardLookupTableResponseBodyLookupTableInfoLookupTableValueList[];
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2025-06-30 00:00:00
   */
  modifyTime?: string;
  /**
   * @remarks
   * The name of the lookup table.
   * 
   * @example
   * 城市码表
   */
  name?: string;
  /**
   * @remarks
   * The user ID of the owner.
   * 
   * @example
   * 30012021
   */
  owner?: string;
  /**
   * @remarks
   * The username of the owner.
   * 
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
   * @remarks
   * The backend response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The lookup table details.
   */
  lookupTableInfo?: GetStandardLookupTableResponseBodyLookupTableInfo;
  /**
   * @remarks
   * The details of the backend exception.
   * 
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
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
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

