// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchImportHttpApisRequestSpecOssConfig extends $dara.Model {
  /**
   * @remarks
   * The OSS bucket name.
   * 
   * This parameter is required.
   * 
   * @example
   * my-bucket
   */
  bucketName?: string;
  /**
   * @remarks
   * OSS Object Key。
   * 
   * This parameter is required.
   * 
   * @example
   * imports/batch.zip
   */
  objectKey?: string;
  /**
   * @remarks
   * The region ID of the OSS bucket.
   * 
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
   * @remarks
   * Specifies whether to overwrite existing APIs. If set to true, gatewayId is required.
   * 
   * @example
   * false
   */
  allowUpdate?: boolean;
  /**
   * @remarks
   * The API type.
   * 
   * This parameter is required.
   * 
   * @example
   * Http
   */
  apiType?: string;
  /**
   * @remarks
   * Enables the dry run feature, which validates the definition without performing the actual import.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The gateway instance ID. For REST APIs, this parameter is required when withGatewayExtension is set to true or allowUpdate is set to true. For batch import of HTTP APIs, this parameter is always required.
   * 
   * @example
   * gw-xxx
   */
  gatewayId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-xxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The standard Base64 encoding of the raw bytes of the OAS ZIP package. The decoded size cannot exceed 10 MiB. This parameter cannot be specified together with specFileUrl or specOssConfig. Dry run is supported and returns validation results, but the dry run task result does not return a replayable importRequest.
   * 
   * @example
   * b3BlbmFwaTogMy4wLjAKaW5mbzoKICAgIHRpdGxlOiBkZW1vCiAgICBkZXNjcmlwdGlvbjogdGhpc2lzZGVtbwogICAgdmVyc2lvbjogIiIKcGF0aHM6CiAgICAvdXNlci97dXNlcklkfToKICAgICAgICBnZXQ6CiAgICAgICAgICAgIHN1bW1hcnk6IOiOt+WPlueUqOaIt+S/oeaBrwogICAgICAgICAgICBkZXNjcmlwdGlvbjog6I635Y+W55So5oi35L+h5oGvCiAgICAgICAgICAgIG9wZXJhdGlvbklkOiBHZXRVc2VySW5mbwogICAgICAgICAgICByZXNwb25zZXM6CiAgICAgICAgICAgICAgICAiMjAwIjoKICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjog5oiQ5YqfCiAgICAgICAgICAgICAgICAgICAgY29udGVudDoKICAgICAgICAgICAgICAgICAgICAgICAgYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04OgogICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NoZW1hOiBudWxsCnNlcnZlcnM6CiAgICAtIHVybDogaHR0cDovL2FwaS5leGFtcGxlLmNvbS92MQo=
   */
  specContentBase64?: string;
  /**
   * @remarks
   * The download URL of the OAS ZIP file. The URL must support unauthenticated downloads. OSS URLs and whitelisted backend domain names are supported. At least one of specFileUrl and specOssConfig must be specified.
   * 
   * @example
   * https://oss-cn-hangzhou.aliyuncs.com/my-bucket/imports/batch.zip
   */
  specFileUrl?: string;
  /**
   * @remarks
   * The OSS configuration for the OAS file in ZIP format. At least one of specFileUrl and specOssConfig must be specified.
   */
  specOssConfig?: BatchImportHttpApisRequestSpecOssConfig;
  /**
   * @remarks
   * The conflict merge strategy during import. Default value: ExistFirst.
   * 
   * @example
   * ExistFirst
   */
  strategy?: string;
  /**
   * @remarks
   * Specifies whether to import with gateway extension configurations. This parameter must be set to true for batch import of HTTP APIs.
   * 
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

