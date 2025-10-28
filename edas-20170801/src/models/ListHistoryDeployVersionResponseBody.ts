// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHistoryDeployVersionResponseBodyPackageVersionListPackageVersion extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * 3616cdca-4f92-4413-****-************
   */
  appId?: string;
  /**
   * @remarks
   * The time when the deployment package was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1573627440892
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the deployment package.
   * 
   * @example
   * deploy
   */
  description?: string;
  /**
   * @remarks
   * The unique ID of the deployment package.
   * 
   * @example
   * 441beb18-da42-44dc-****-************
   */
  id?: string;
  /**
   * @remarks
   * The version of the application that was released by using the deployment package. This version can be used to call the RollbackApplication operation.
   * 
   * @example
   * 1.0
   */
  packageVersion?: string;
  /**
   * @remarks
   * The URL of the deployment package.
   */
  publicUrl?: string;
  /**
   * @remarks
   * The deployment mode of the application. Valid values:
   * 
   * *   url: The application is deployed by using a JAR or WAR package.
   * *   image: The application is deployed by using an image.
   * 
   * @example
   * url
   */
  type?: string;
  /**
   * @remarks
   * The time when the deployment package was last modified. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1573627440892
   */
  updateTime?: number;
  /**
   * @remarks
   * The URL of the deployment package.
   */
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
  /**
   * @remarks
   * The information about historical deployment packages.
   */
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

