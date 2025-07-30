// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class DescribeDirectoriesResponseBodyDirectories extends $dara.Model {
  /**
   * @remarks
   * The connection method.
   * 
   * Valid values:
   * 
   * *   VPC: End users connect to cloud computers over an enterprise virtual private cloud (VPC).
   * *   INTERNET: End users connect to cloud computers over the Internet.
   * *   ANY: End users connect to cloud computers over the Internet or an enterprise VPC.
   * 
   * @example
   * INTERNET
   */
  desktopAccessType?: string;
  /**
   * @remarks
   * The directory ID.
   * 
   * @example
   * cn-hangzhou+dir-gx2x1dhsmu52rd****
   */
  directoryId?: string;
  /**
   * @remarks
   * The directory type.
   * 
   * @example
   * AD_CONNECTOR
   */
  directoryType?: string;
  /**
   * @remarks
   * The provider ID.
   * 
   * @example
   * 26842
   */
  providerId?: string;
  /**
   * @remarks
   * The URL of the SSO service.
   * 
   * @example
   * https://eds-cn-shanghai-67726****
   */
  ssoServiceUrl?: string;
  static names(): { [key: string]: string } {
    return {
      desktopAccessType: 'DesktopAccessType',
      directoryId: 'DirectoryId',
      directoryType: 'DirectoryType',
      providerId: 'ProviderId',
      ssoServiceUrl: 'SsoServiceUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopAccessType: 'string',
      directoryId: 'string',
      directoryType: 'string',
      providerId: 'string',
      ssoServiceUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDirectoriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The directories.
   */
  directories?: DescribeDirectoriesResponseBodyDirectories[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F369A091-002F-49C8-AD55-02A77629****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      directories: 'Directories',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directories: { 'type': 'array', 'itemType': DescribeDirectoriesResponseBodyDirectories },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.directories)) {
      $dara.Model.validateArray(this.directories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

