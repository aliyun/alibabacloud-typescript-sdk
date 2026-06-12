// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HttpApiDeployConfig } from "./HttpApiDeployConfig";
import { HttpApiVersionConfig } from "./HttpApiVersionConfig";


export class ImportHttpApiRequestSpecOssConfig extends $dara.Model {
  /**
   * @remarks
   * The name of the OSS bucket that contains the API definition file.
   * 
   * @example
   * gms-service-prod
   */
  bucketName?: string;
  /**
   * @remarks
   * The object key (file path) of the API definition file within the bucket.
   * 
   * @example
   * /test/swagger.json
   */
  objectKey?: string;
  /**
   * @remarks
   * The ID of the region where the OSS bucket is located.
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
   * The description of the API to import. If omitted, the description is taken from the API definition. The maximum length is 255 bytes.
   * 
   * @example
   * 测试专用API
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether to perform a dry run. If `true`, the system validates the request but does not import the API.
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
   * The name of the API to import. If omitted, the name is taken from the API definition file. If an API with the same name and versioning configuration already exists, the import acts as an update based on the specified `strategy`.
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
   * The Base64-encoded API definition. It supports OpenAPI Specification (OAS) 2.0 and 3.0 and can be in either YAML or JSON format. This parameter takes precedence over `specFileUrl`. If the file size is larger than 10 MB, use the `specFileUrl` parameter.
   * 
   * @example
   * b3BlbmFwaTogMy4wLjAKaW5mbzoKICAgIHRpdGxlOiBkZW1vCiAgICBkZXNjcmlwdGlvbjogdGhpc2lzZGVtbwogICAgdmVyc2lvbjogIiIKcGF0aHM6CiAgICAvdXNlci97dXNlcklkfToKICAgICAgICBnZXQ6CiAgICAgICAgICAgIHN1bW1hcnk6IOiOt+WPlueUqOaIt+S/oeaBrwogICAgICAgICAgICBkZXNjcmlwdGlvbjog6I635Y+W55So5oi35L+h5oGvCiAgICAgICAgICAgIG9wZXJhdGlvbklkOiBHZXRVc2VySW5mbwogICAgICAgICAgICByZXNwb25zZXM6CiAgICAgICAgICAgICAgICAiMjAwIjoKICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjog5oiQ5YqfCiAgICAgICAgICAgICAgICAgICAgY29udGVudDoKICAgICAgICAgICAgICAgICAgICAgICAgYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04OgogICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NoZW1hOiBudWxsCnNlcnZlcnM6CiAgICAtIHVybDogaHR0cDovL2FwaS5leGFtcGxlLmNvbS92MQo=
   */
  specContentBase64?: string;
  /**
   * @remarks
   * The URL of the API definition file stored in OSS. The URL must be accessible from the public network or be an internal OSS endpoint in the same region. For OSS objects that are not publicly readable, use a presigned URL. For details, see [Download a file by using a presigned URL](https://help.aliyun.com/document_detail/39607.html).
   */
  specFileUrl?: string;
  /**
   * @remarks
   * Configuration for fetching the API definition from an OSS bucket.
   */
  specOssConfig?: ImportHttpApiRequestSpecOssConfig;
  /**
   * @remarks
   * The update strategy to apply when an API with the same name and versioning configuration already exists.
   * 
   * - `SpecOnly`: Overwrites the existing API completely with the imported definition.
   * 
   * - `SpecFirst`: Updates existing APIs and creates new ones based on the imported definition. Existing APIs not included in the import file are unaffected.
   * 
   * - `ExistFirst`: Creates new APIs from the imported definition but does not modify any existing APIs. This is the default strategy.
   * 
   * @example
   * ExistFirst
   */
  strategy?: string;
  /**
   * @remarks
   * If you specify this parameter, the import updates the specified API instead of creating a new one or searching for an existing API by name and versioning configuration. The target API must be an HTTP API.
   * 
   * @example
   * api-xxxx
   */
  targetHttpApiId?: string;
  /**
   * @remarks
   * The versioning configuration for the API. If an existing API matches the specified name (and version, if enabled), this import updates that API.
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

