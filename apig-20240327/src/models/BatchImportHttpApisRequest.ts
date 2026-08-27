// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchImportHttpApisRequestSpecOssConfig extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * my-bucket
   */
  bucketName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * imports/batch.zip
   */
  objectKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'bucketName',
      objectKey: 'objectKey',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      objectKey: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchImportHttpApisRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  allowUpdate?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Http
   */
  apiType?: string;
  /**
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @example
   * gw-xxx
   */
  gatewayId?: string;
  /**
   * @example
   * rg-xxx
   */
  resourceGroupId?: string;
  /**
   * @example
   * b3BlbmFwaTogMy4wLjAKaW5mbzoKICAgIHRpdGxlOiBkZW1vCiAgICBkZXNjcmlwdGlvbjogdGhpc2lzZGVtbwogICAgdmVyc2lvbjogIiIKcGF0aHM6CiAgICAvdXNlci97dXNlcklkfToKICAgICAgICBnZXQ6CiAgICAgICAgICAgIHN1bW1hcnk6IOiOt+WPlueUqOaIt+S/oeaBrwogICAgICAgICAgICBkZXNjcmlwdGlvbjog6I635Y+W55So5oi35L+h5oGvCiAgICAgICAgICAgIG9wZXJhdGlvbklkOiBHZXRVc2VySW5mbwogICAgICAgICAgICByZXNwb25zZXM6CiAgICAgICAgICAgICAgICAiMjAwIjoKICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjog5oiQ5YqfCiAgICAgICAgICAgICAgICAgICAgY29udGVudDoKICAgICAgICAgICAgICAgICAgICAgICAgYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04OgogICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NoZW1hOiBudWxsCnNlcnZlcnM6CiAgICAtIHVybDogaHR0cDovL2FwaS5leGFtcGxlLmNvbS92MQo=
   */
  specContentBase64?: string;
  /**
   * @example
   * https://oss-cn-hangzhou.aliyuncs.com/my-bucket/imports/batch.zip
   */
  specFileUrl?: string;
  specOssConfig?: BatchImportHttpApisRequestSpecOssConfig;
  /**
   * @example
   * ExistFirst
   */
  strategy?: string;
  /**
   * @example
   * false
   */
  withGatewayExtension?: boolean;
  static names(): { [key: string]: string } {
    return {
      allowUpdate: 'allowUpdate',
      apiType: 'apiType',
      dryRun: 'dryRun',
      gatewayId: 'gatewayId',
      resourceGroupId: 'resourceGroupId',
      specContentBase64: 'specContentBase64',
      specFileUrl: 'specFileUrl',
      specOssConfig: 'specOssConfig',
      strategy: 'strategy',
      withGatewayExtension: 'withGatewayExtension',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowUpdate: 'boolean',
      apiType: 'string',
      dryRun: 'boolean',
      gatewayId: 'string',
      resourceGroupId: 'string',
      specContentBase64: 'string',
      specFileUrl: 'string',
      specOssConfig: BatchImportHttpApisRequestSpecOssConfig,
      strategy: 'string',
      withGatewayExtension: 'boolean',
    };
  }

  validate() {
    if(this.specOssConfig && typeof (this.specOssConfig as any).validate === 'function') {
      (this.specOssConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

