// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchImportHttpApisRequestSpecOssConfig extends $dara.Model {
  /**
   * @remarks
   * The name of the OSS bucket.
   * 
   * This parameter is required.
   * 
   * @example
   * my-bucket
   */
  bucketName?: string;
  /**
   * @remarks
   * The OSS object key.
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
   * Specifies whether to allow overwriting existing APIs. The gatewayId parameter is required when this parameter is set to true.
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
   * The dry run feature that checks definitions without importing.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The gateway instance ID. This parameter is required for REST APIs when withGatewayExtension or allowUpdate is set to true. This parameter is required for batch importing HTTP APIs.
   * 
   * @example
   * gw-xxx
   */
  gatewayId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-xxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The standard Base64 encoding of the raw bytes of the OAS ZIP package. The maximum size after decoding is 10 MiB. This parameter cannot be specified together with specFileUrl or specOssConfig. Dry runs are supported and return check results, but the Base64 dry run task result does not return a replayable importRequest.
   * 
   * @example
   * b3BlbmFwaTogMy4wLjAKaW5mbzoKICAgIHRpdGxlOiBkZW1vCiAgICBkZXNjcmlwdGlvbjogdGhpc2lzZGVtbwogICAgdmVyc2lvbjogIiIKcGF0aHM6CiAgICAvdXNlci97dXNlcklkfToKICAgICAgICBnZXQ6CiAgICAgICAgICAgIHN1bW1hcnk6IOiOt+WPlueUqOaIt+S/oeaBrwogICAgICAgICAgICBkZXNjcmlwdGlvbjog6I635Y+W55So5oi35L+h5oGvCiAgICAgICAgICAgIG9wZXJhdGlvbklkOiBHZXRVc2VySW5mbwogICAgICAgICAgICByZXNwb25zZXM6CiAgICAgICAgICAgICAgICAiMjAwIjoKICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjog5oiQ5YqfCiAgICAgICAgICAgICAgICAgICAgY29udGVudDoKICAgICAgICAgICAgICAgICAgICAgICAgYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04OgogICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NoZW1hOiBudWxsCnNlcnZlcnM6CiAgICAtIHVybDogaHR0cDovL2FwaS5leGFtcGxlLmNvbS92MQo=
   */
  specContentBase64?: string;
  /**
   * @remarks
   * The download URL of the OAS ZIP file. The URL must support unauthenticated downloads. OSS URLs or backend whitelisted domains are supported. At least one of specFileUrl and specOssConfig must be specified.
   * 
   * @example
   * https://oss-cn-hangzhou.aliyuncs.com/my-bucket/imports/batch.zip
   */
  specFileUrl?: string;
  /**
   * @remarks
   * The OSS configuration of the OAS file. The file must be in ZIP format. At least one of specFileUrl and specOssConfig must be specified.
   */
  specOssConfig?: BatchImportHttpApisRequestSpecOssConfig;
  /**
   * @remarks
   * The conflict merging strategy during import. Default value: ExistFirst.
   * 
   * @example
   * ExistFirst
   */
  strategy?: string;
  /**
   * @remarks
   * Specifies whether to import with gateway extension configurations. This parameter must be set to true for batch importing HTTP APIs.
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

