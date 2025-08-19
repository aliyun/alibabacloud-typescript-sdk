// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableResourceDirectoryResponseBodyResourceDirectory extends $dara.Model {
  /**
   * @remarks
   * The time when the resource directory was enabled.
   * 
   * @example
   * 2021-12-08T02:15:31.744Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the management account.
   * 
   * @example
   * 507408460615****
   */
  masterAccountId?: string;
  /**
   * @remarks
   * The name of the management account.
   * 
   * @example
   * alice@example.com
   */
  masterAccountName?: string;
  /**
   * @remarks
   * The ID of the resource directory.
   * 
   * @example
   * rd-54****
   */
  resourceDirectoryId?: string;
  /**
   * @remarks
   * The ID of the Root folder.
   * 
   * @example
   * r-G9****
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

export class EnableResourceDirectoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EC2FE94D-A4A2-51A1-A493-5C273A36C46A
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the resource directory.
   */
  resourceDirectory?: EnableResourceDirectoryResponseBodyResourceDirectory;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceDirectory: 'ResourceDirectory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceDirectory: EnableResourceDirectoryResponseBodyResourceDirectory,
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

