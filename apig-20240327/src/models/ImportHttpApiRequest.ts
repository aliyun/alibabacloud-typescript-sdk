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
   * The description of the imported API. If this parameter is not specified, the description is extracted from the API definition. The maximum length is 255 bytes.
   * 
   * @example
   * Test API
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. If this parameter is set to true, only the Swagger definition is checked and no import operation is performed.
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
   * The name of the imported API. If this parameter is not specified, the name is extracted from the API definition file. If an API with the same name and versioning configuration already exists, the import operation updates the existing API definition based on the strategy parameter.
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
   * The Base64-encoded API definition. OpenAPI Specification (OAS) 2.0 and OAS 3.0 are supported. Both YAML and JSON formats are supported. This parameter has a higher priority than the specFileUrl parameter. If the file size exceeds 10 MB, use the specFileUrl parameter instead.
   * 
   * @example
   * b3BlbmFwaTogMy4wLjAKaW5mbzoKICAgIHRpdGxlOiBkZW1vCiAgICBkZXNjcmlwdGlvbjogdGhpc2lzZGVtbwogICAgdmVyc2lvbjogIiIKcGF0aHM6CiAgICAvdXNlci97dXNlcklkfToKICAgICAgICBnZXQ6CiAgICAgICAgICAgIHN1bW1hcnk6IOiOt+WPlueUqOaIt+S/oeaBrwogICAgICAgICAgICBkZXNjcmlwdGlvbjog6I635Y+W55So5oi35L+h5oGvCiAgICAgICAgICAgIG9wZXJhdGlvbklkOiBHZXRVc2VySW5mbwogICAgICAgICAgICByZXNwb25zZXM6CiAgICAgICAgICAgICAgICAiMjAwIjoKICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjog5oiQ5YqfCiAgICAgICAgICAgICAgICAgICAgY29udGVudDoKICAgICAgICAgICAgICAgICAgICAgICAgYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04OgogICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NoZW1hOiBudWxsCnNlcnZlcnM6CiAgICAtIHVybDogaHR0cDovL2FwaS5leGFtcGxlLmNvbS92MQo=
   */
  specContentBase64?: string;
  /**
   * @remarks
   * The download URL of the API definition file. The file must be downloadable over the Internet or through the internal network of Object Storage Service (OSS) in the same region. The URL must have download permissions. For OSS file links that are not publicly readable, see References [Download objects by using presigned URLs](https://help.aliyun.com/document_detail/39607.html) and provide a URL with download permissions. Currently, only API definition files stored in OSS are supported.
   */
  specFileUrl?: string;
  /**
   * @remarks
   * The OSS information.
   */
  specOssConfig?: ImportHttpApiRequestSpecOssConfig;
  /**
   * @remarks
   * The update policy to use when the name and version management of the imported API are the same as those of an existing API. Valid values:
   * - SpecOnly: The imported file completely overwrites the existing API definition.
   * - SpecFirst: The imported file takes precedence. New operations are added and existing operations are updated. Operations not mentioned in the file remain unchanged.
   * - ExistFirst: The existing API takes precedence. Only new operations are added, and existing operations are not updated.
   * Default value: ExistFirst policy.
   * 
   * @example
   * ExistFirst
   */
  strategy?: string;
  /**
   * @remarks
   * The ID of the HTTP API to be overwritten by the import. If this parameter is specified, the import operation updates the specified API instead of importing a new API or searching for an existing API based on the API name and version management configuration. The target API must be of the REST type.
   * 
   * @example
   * api-xxxx
   */
  targetHttpApiId?: string;
  /**
   * @remarks
   * The API versioning configuration. If versioning is enabled and the API name and version number are the same as those of an existing API, the import operation is considered an update. If versioning is disabled and the API name is the same as that of an existing API, the import operation is also considered an update.
   */
  versionConfig?: HttpApiVersionConfig;
  /**
   * @remarks
   * Specifies whether to import gateway extension information. Set this parameter to true when you import gateway extension configurations for an HTTP API.
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

