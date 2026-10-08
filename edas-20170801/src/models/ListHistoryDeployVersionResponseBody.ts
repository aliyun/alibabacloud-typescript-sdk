// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHistoryDeployVersionResponseBodyPackageVersionListPackageVersion extends $dara.Model {
  appId?: string;
  createTime?: number;
  description?: string;
  id?: string;
  packageVersion?: string;
  publicUrl?: string;
  type?: string;
  updateTime?: number;
  warUrl?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      createTime: 'CreateTime',
      description: 'Description',
      id: 'Id',
      packageVersion: 'PackageVersion',
      publicUrl: 'PublicUrl',
      type: 'Type',
      updateTime: 'UpdateTime',
      warUrl: 'WarUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      createTime: 'number',
      description: 'string',
      id: 'string',
      packageVersion: 'string',
      publicUrl: 'string',
      type: 'string',
      updateTime: 'number',
      warUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHistoryDeployVersionResponseBodyPackageVersionList extends $dara.Model {
  packageVersion?: ListHistoryDeployVersionResponseBodyPackageVersionListPackageVersion[];
  static names(): { [key: string]: string } {
    return {
      packageVersion: 'PackageVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      packageVersion: { 'type': 'array', 'itemType': ListHistoryDeployVersionResponseBodyPackageVersionListPackageVersion },
    };
  }

  validate() {
    if(Array.isArray(this.packageVersion)) {
      $dara.Model.validateArray(this.packageVersion);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHistoryDeployVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The additional information that is returned.
   * 
   * @example
   * success
   */
  message?: string;
  packageVersionList?: ListHistoryDeployVersionResponseBodyPackageVersionList;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D16979DC-4D42-************
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      packageVersionList: 'PackageVersionList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      packageVersionList: ListHistoryDeployVersionResponseBodyPackageVersionList,
      requestId: 'string',
    };
  }

  validate() {
    if(this.packageVersionList && typeof (this.packageVersionList as any).validate === 'function') {
      (this.packageVersionList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

