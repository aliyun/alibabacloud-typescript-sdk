// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HttpApiDeployConfig } from "./HttpApiDeployConfig";
import { HttpApiVersionConfig } from "./HttpApiVersionConfig";


export class ImportHttpApiRequestSpecOssConfig extends $dara.Model {
  /**
   * @remarks
   * The bucket name.
   * 
   * @example
   * gms-service-prod
   */
  bucketName?: string;
  /**
   * @remarks
   * The full path of the file.
   * 
   * @example
   * /test/swagger.json
   */
  objectKey?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
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

export class ImportHttpApiRequest extends $dara.Model {
  /**
   * @remarks
   * The API deployment configurations.
   */
  deployConfigs?: HttpApiDeployConfig[];
  /**
   * @remarks
   * The description of the imported API. If this parameter is not specified, the description is extracted from the API definition. Maximum length: 255 bytes.
   * 
   * @example
   * 测试专用API
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. If enabled, only validation is performed without the actual import.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The gateway ID.
   * 
   * @example
   * gw-xxx
   */
  gatewayId?: string;
  /**
   * @remarks
   * The MCP route ID.
   * 
   * @example
   * xxx
   */
  mcpRouteId?: string;
  /**
   * @remarks
   * The name of the imported API. If this parameter is not specified, the name is extracted from the API definition file. If an API with the same name and version configuration already exists, this import updates the existing API definition based on the strategy parameter.
   * 
   * @example
   * import-test
   */
  name?: string;
  /**
   * @remarks
   * The [resource group ID](https://help.aliyun.com/document_detail/151181.html).
   * 
   * @example
   * rg-aek23nsa353vmra
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The Base64-encoded API definition. OAS 2.0 and OAS 3.0 specifications are supported in YAML or JSON format. This parameter takes priority over the specFileUrl parameter. If the file size exceeds 10 MB, use the specFileUrl parameter instead.
   * 
   * @example
   * b3BlbmFwaTogMy4wLjAKaW5mbzoKICAgIHRpdGxlOiBkZW1vCiAgICBkZXNjcmlwdGlvbjogdGhpc2lzZGVtbwogICAgdmVyc2lvbjogIiIKcGF0aHM6CiAgICAvdXNlci97dXNlcklkfToKICAgICAgICBnZXQ6CiAgICAgICAgICAgIHN1bW1hcnk6IOiOt+WPlueUqOaIt+S/oeaBrwogICAgICAgICAgICBkZXNjcmlwdGlvbjog6I635Y+W55So5oi35L+h5oGvCiAgICAgICAgICAgIG9wZXJhdGlvbklkOiBHZXRVc2VySW5mbwogICAgICAgICAgICByZXNwb25zZXM6CiAgICAgICAgICAgICAgICAiMjAwIjoKICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjog5oiQ5YqfCiAgICAgICAgICAgICAgICAgICAgY29udGVudDoKICAgICAgICAgICAgICAgICAgICAgICAgYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04OgogICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NoZW1hOiBudWxsCnNlcnZlcnM6CiAgICAtIHVybDogaHR0cDovL2FwaS5leGFtcGxlLmNvbS92MQo=
   */
  specContentBase64?: string;
  /**
   * @remarks
   * The download URL of the API definition file. The URL must be accessible over the public network or be an internal network OSS download URL in the same region. The URL must have download permissions. For OSS files that are not publicly readable, see References [Download objects using presigned URLs](https://help.aliyun.com/document_detail/39607.html) and provide a URL with download permissions. Only API definition files stored in OSS are supported.
   */
  specFileUrl?: string;
  /**
   * @remarks
   * The OSS configuration.
   */
  specOssConfig?: ImportHttpApiRequestSpecOssConfig;
  /**
   * @remarks
   * The update strategy to use when the imported API has the same name and version management configuration as an existing API. Valid values:
   * - SpecOnly: uses the imported file as the single source of truth.
   * - SpecFirst: prioritizes the imported file. New operations are added and existing operations are updated. Operations not mentioned in the file remain unchanged.
   * - ExistFirst: prioritizes the existing API. Only new operations are added. Existing operations are not updated.
   * 
   * Default value: ExistFirst.
   * 
   * @example
   * ExistFirst
   */
  strategy?: string;
  /**
   * @remarks
   * The ID of the target HTTP API. If this parameter is specified, this import updates the specified API instead of creating a new one or searching for an existing API by name and version management configuration. The target API must be of the REST type.
   * 
   * @example
   * api-xxxx
   */
  targetHttpApiId?: string;
  /**
   * @remarks
   * The API version configuration. If version configuration is enabled and an API with the same version number and name already exists, this import is treated as an update. If version configuration is not enabled and an API with the same name already exists, this import is treated as an update.
   */
  versionConfig?: HttpApiVersionConfig;
  withGatewayExtension?: boolean;
  static names(): { [key: string]: string } {
    return {
      deployConfigs: 'deployConfigs',
      description: 'description',
      dryRun: 'dryRun',
      gatewayId: 'gatewayId',
      mcpRouteId: 'mcpRouteId',
      name: 'name',
      resourceGroupId: 'resourceGroupId',
      specContentBase64: 'specContentBase64',
      specFileUrl: 'specFileUrl',
      specOssConfig: 'specOssConfig',
      strategy: 'strategy',
      targetHttpApiId: 'targetHttpApiId',
      versionConfig: 'versionConfig',
      withGatewayExtension: 'withGatewayExtension',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployConfigs: { 'type': 'array', 'itemType': HttpApiDeployConfig },
      description: 'string',
      dryRun: 'boolean',
      gatewayId: 'string',
      mcpRouteId: 'string',
      name: 'string',
      resourceGroupId: 'string',
      specContentBase64: 'string',
      specFileUrl: 'string',
      specOssConfig: ImportHttpApiRequestSpecOssConfig,
      strategy: 'string',
      targetHttpApiId: 'string',
      versionConfig: HttpApiVersionConfig,
      withGatewayExtension: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.deployConfigs)) {
      $dara.Model.validateArray(this.deployConfigs);
    }
    if(this.specOssConfig && typeof (this.specOssConfig as any).validate === 'function') {
      (this.specOssConfig as any).validate();
    }
    if(this.versionConfig && typeof (this.versionConfig as any).validate === 'function') {
      (this.versionConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

