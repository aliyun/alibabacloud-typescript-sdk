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
   * The description of the API to be imported. If you do not specify this parameter, the description is extracted from the API definition file. The maximum length is 255 bytes.
   * 
   * @example
   * Test API
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. If you set this parameter to true, the system only checks the Swagger definition without importing the API.
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
   * mcp-route-xxxxxxxx
   */
  mcpRouteId?: string;
  /**
   * @remarks
   * The name of the API to be imported. If you do not specify this parameter, the name is extracted from the API definition file. If an API with the same name and version configuration already exists, the import operation updates the existing API definition based on the strategy parameter.
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
   * The Base64-encoded API definition. Supports OAS 2.0 and OAS 3.0 specifications in YAML or JSON format. This parameter has a higher priority than the specFileUrl parameter. If the file size exceeds 10 MB, use the specFileUrl parameter instead.
   * 
   * @example
   * b3BlbmFwaTogMy4wLjAKaW5mbzoKICAgIHRpdGxlOiBkZW1vCiAgICBkZXNjcmlwdGlvbjogdGhpc2lzZGVtbwogICAgdmVyc2lvbjogIiIKcGF0aHM6CiAgICAvdXNlci97dXNlcklkfToKICAgICAgICBnZXQ6CiAgICAgICAgICAgIHN1bW1hcnk6IOiOt+WPlueUqOaIt+S/oeaBrwogICAgICAgICAgICBkZXNjcmlwdGlvbjog6I635Y+W55So5oi35L+h5oGvCiAgICAgICAgICAgIG9wZXJhdGlvbklkOiBHZXRVc2VySW5mbwogICAgICAgICAgICByZXNwb25zZXM6CiAgICAgICAgICAgICAgICAiMjAwIjoKICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjog5oiQ5YqfCiAgICAgICAgICAgICAgICAgICAgY29udGVudDoKICAgICAgICAgICAgICAgICAgICAgICAgYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04OgogICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NoZW1hOiBudWxsCnNlcnZlcnM6CiAgICAtIHVybDogaHR0cDovL2FwaS5leGFtcGxlLmNvbS92MQo=
   */
  specContentBase64?: string;
  /**
   * @remarks
   * The download URL of the API definition file. The file must be downloadable over the Internet or through the internal network of OSS in the same region. The URL must have download permissions. For OSS file links that are not publicly readable, see References: [Download objects by using presigned URLs](https://help.aliyun.com/document_detail/39607.html) and provide a URL with download permissions. Currently, only API definition files stored in OSS are supported.
   */
  specFileUrl?: string;
  /**
   * @remarks
   * The OSS configuration.
   */
  specOssConfig?: ImportHttpApiRequestSpecOssConfig;
  /**
   * @remarks
   * The update policy to use when the name and version management configuration of the imported API are the same as those of an existing API. Valid values:
   * - SpecOnly: The imported file completely overwrites the existing API.
   * - SpecFirst: The imported file takes precedence. New operations are added and existing operations are updated. Operations not mentioned in the file remain unchanged.
   * - ExistFirst: The existing API takes precedence. Only new operations are added, and existing operations are not updated.
   * Default value: ExistFirst.
   * 
   * @example
   * ExistFirst
   */
  strategy?: string;
  /**
   * @remarks
   * The ID of the HTTP API to be overwritten by the import. If you specify this parameter, the import operation updates the specified API instead of importing a new API or searching for an existing API based on the name and version management configuration. The target API must be of the REST type.
   * 
   * @example
   * api-xxxx
   */
  targetHttpApiId?: string;
  /**
   * @remarks
   * The API versioning configuration. If versioning is enabled and an API with the same name and version number already exists, the import operation is treated as an update. If versioning is disabled and an API with the same name already exists, the import operation is also treated as an update.
   */
  versionConfig?: HttpApiVersionConfig;
  /**
   * @remarks
   * Specifies whether to import gateway extension information.
   * 
   * @example
   * false
   */
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

