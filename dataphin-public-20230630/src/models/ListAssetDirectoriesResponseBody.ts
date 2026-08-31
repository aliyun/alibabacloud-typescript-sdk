// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAssetDirectoriesResponseBodyDataDirectoryListModifier extends $dara.Model {
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 30001011
   */
  userId?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * John
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssetDirectoriesResponseBodyDataDirectoryList extends $dara.Model {
  /**
   * @remarks
   * The folder description.
   * 
   * @example
   * Core metrics asset folder
   */
  directoryDescription?: string;
  /**
   * @remarks
   * The folder ID.
   * 
   * @example
   * 8223183275
   */
  directoryId?: number;
  /**
   * @remarks
   * The folder name.
   * 
   * @example
   * Core Metrics
   */
  directoryName?: string;
  /**
   * @remarks
   * The display path.
   * 
   * @example
   * /Data Governance/Core Metrics
   */
  fullPath?: string;
  /**
   * @remarks
   * The ID path from the top level to the current folder.
   */
  fullPathIds?: number[];
  /**
   * @remarks
   * The name path from the top level to the current folder.
   */
  fullPathNames?: string[];
  /**
   * @remarks
   * Indicates whether published direct child folders exist.
   */
  hasChildren?: boolean;
  /**
   * @remarks
   * The absolute level of the folder.
   * 
   * @example
   * 7120213
   */
  level?: number;
  /**
   * @remarks
   * The last modifier.
   */
  modifier?: ListAssetDirectoriesResponseBodyDataDirectoryListModifier;
  /**
   * @remarks
   * The last modified time.
   * 
   * @example
   * 2025-06-30 00:00:00
   */
  modifyTime?: string;
  /**
   * @remarks
   * The parent folder ID.
   * 
   * @example
   * -292276281678
   */
  parentDirectoryId?: number;
  static names(): { [key: string]: string } {
    return {
      directoryDescription: 'DirectoryDescription',
      directoryId: 'DirectoryId',
      directoryName: 'DirectoryName',
      fullPath: 'FullPath',
      fullPathIds: 'FullPathIds',
      fullPathNames: 'FullPathNames',
      hasChildren: 'HasChildren',
      level: 'Level',
      modifier: 'Modifier',
      modifyTime: 'ModifyTime',
      parentDirectoryId: 'ParentDirectoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryDescription: 'string',
      directoryId: 'number',
      directoryName: 'string',
      fullPath: 'string',
      fullPathIds: { 'type': 'array', 'itemType': 'number' },
      fullPathNames: { 'type': 'array', 'itemType': 'string' },
      hasChildren: 'boolean',
      level: 'number',
      modifier: ListAssetDirectoriesResponseBodyDataDirectoryListModifier,
      modifyTime: 'string',
      parentDirectoryId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.fullPathIds)) {
      $dara.Model.validateArray(this.fullPathIds);
    }
    if(Array.isArray(this.fullPathNames)) {
      $dara.Model.validateArray(this.fullPathNames);
    }
    if(this.modifier && typeof (this.modifier as any).validate === 'function') {
      (this.modifier as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssetDirectoriesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The folder list.
   */
  directoryList?: ListAssetDirectoriesResponseBodyDataDirectoryList[];
  /**
   * @remarks
   * The topic ID.
   * 
   * @example
   * 471794724245
   */
  topicId?: number;
  /**
   * @remarks
   * The topic name.
   * 
   * @example
   * Data Governance
   */
  topicName?: string;
  /**
   * @remarks
   * The total number of records that match the conditions.
   * 
   * @example
   * -165955346599
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      directoryList: 'DirectoryList',
      topicId: 'TopicId',
      topicName: 'TopicName',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryList: { 'type': 'array', 'itemType': ListAssetDirectoriesResponseBodyDataDirectoryList },
      topicId: 'number',
      topicName: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.directoryList)) {
      $dara.Model.validateArray(this.directoryList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssetDirectoriesResponseBody extends $dara.Model {
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
   * The paginated result of asset topic folders.
   */
  data?: ListAssetDirectoriesResponseBodyData;
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
   * The backend exception details.
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
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListAssetDirectoriesResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

