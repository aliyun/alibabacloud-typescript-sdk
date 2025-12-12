// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitResourceDirectoryResponseBodyResourceDirectory extends $dara.Model {
  /**
   * @remarks
   * The time when the resource directory was enabled.
   * 
   * @example
   * 2019-02-18T15:32:10.473Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the enterprise management account.
   * 
   * @example
   * 172841235500****
   */
  masterAccountId?: string;
  /**
   * @remarks
   * The name of the enterprise management account.
   * 
   * @example
   * aliyun-****
   */
  masterAccountName?: string;
  /**
   * @remarks
   * The ID of the resource directory.
   * 
   * @example
   * rd-Ss****
   */
  resourceDirectoryId?: string;
  /**
   * @remarks
   * The ID of the root folder.
   * 
   * @example
   * r-Zo****
   */
  rootFolderId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      masterAccountId: 'MasterAccountId',
      masterAccountName: 'MasterAccountName',
      resourceDirectoryId: 'ResourceDirectoryId',
      rootFolderId: 'RootFolderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      masterAccountId: 'string',
      masterAccountName: 'string',
      resourceDirectoryId: 'string',
      rootFolderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitResourceDirectoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CD76D376-2517-4924-92C5-DBC52262F93A
   */
  requestId?: string;
  /**
   * @remarks
   * The information of the resource directory.
   */
  resourceDirectory?: InitResourceDirectoryResponseBodyResourceDirectory;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceDirectory: 'ResourceDirectory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceDirectory: InitResourceDirectoryResponseBodyResourceDirectory,
    };
  }

  validate() {
    if(this.resourceDirectory && typeof (this.resourceDirectory as any).validate === 'function') {
      (this.resourceDirectory as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

