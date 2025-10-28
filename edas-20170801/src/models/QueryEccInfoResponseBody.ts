// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryEccInfoResponseBodyEccInfo extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * e809****-43d7-4c6b-8e01-b0d9d1db****
   */
  appId?: string;
  /**
   * @remarks
   * ECC ID
   * 
   * @example
   * a5b9****-40b4-4d7b-9c2a-55d6c1c0****
   */
  eccId?: string;
  /**
   * @remarks
   * ECU ID
   * 
   * @example
   * 0d4e****-6d87-401f-ba81-13df9877****
   */
  ecuId?: string;
  /**
   * @remarks
   * The ID of the ECC group.
   * 
   * @example
   * 57cd****-2d3b-496f-bcce-646d0a4d****
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the ECC group.
   * 
   * @example
   * _DEFAULT_GROUP
   */
  groupName?: string;
  /**
   * @remarks
   * The MD5 hash value of the deployment package version.
   * 
   * @example
   * bab6****7a090e41ca9445c9b3cd****
   */
  packageMd5?: string;
  /**
   * @remarks
   * The version of the deployment package.
   * 
   * @example
   * 20210209.153400
   */
  packageVersion?: string;
  /**
   * @remarks
   * VPC ID
   * 
   * @example
   * vpc-23727****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      eccId: 'EccId',
      ecuId: 'EcuId',
      groupId: 'GroupId',
      groupName: 'GroupName',
      packageMd5: 'PackageMd5',
      packageVersion: 'PackageVersion',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      eccId: 'string',
      ecuId: 'string',
      groupId: 'string',
      groupName: 'string',
      packageMd5: 'string',
      packageVersion: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEccInfoResponseBody extends $dara.Model {
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
   * The information about the ECC.
   */
  eccInfo?: QueryEccInfoResponseBodyEccInfo;
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
   * The ID of the request.
   * 
   * @example
   * b197-40ab-9155-****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      eccInfo: 'EccInfo',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      eccInfo: QueryEccInfoResponseBodyEccInfo,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.eccInfo && typeof (this.eccInfo as any).validate === 'function') {
      (this.eccInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

