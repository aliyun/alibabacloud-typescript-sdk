// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HttpApiDeployConfig } from "./HttpApiDeployConfig";
import { HttpApiVersionConfig } from "./HttpApiVersionConfig";


export class ImportHttpApiRequestSpecOssConfig extends $dara.Model {
  /**
   * @remarks
   * The OSS bucket name.
   * 
   * @example
   * api-1
   */
  bucketName?: string;
  /**
   * @remarks
   * The full file path in OSS.
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

export class ImportHttpApiRequest extends $dara.Model {
  /**
   * @remarks
   * The API deployment configuration.
   */
  deployConfigs?: HttpApiDeployConfig[];
  /**
   * @remarks
   * The imported API description (255-byte limit). If not specified, a description is extracted from the API definition file. A maximum of 255 bytes is supported.
   * 
   * @example
   * API for testing
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform a precheck. If set to true, a check is performed without actual import.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Gateway ID.
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
   * The imported API name. If not specified, a name is extracted from the API definition file. If the API name and versioning configuration already exist, this import will update the existing API definition based on the strategy field.
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
   * rg-acfm3q4zjh7fkki
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The Base64-encoded API definition (supports OAS 2.0/OAS 3.0 in YAML/JSON). This parameter has higher priority than the specFileUrl parameter. However, if the file size exceeds 10 MB, use the specFileUrl parameter to pass the definition.
   * 
   * @example
   * b3BlbmFwaTogMy4wLjAKaW5mbzoKICAgIHRpdGxlOiBkZW1vCiAgICBkZXNjcmlwdGlvbjogdGhpc2lzZGVtbwogICAgdmVyc2lvbjogIiIKcGF0aHM6CiAgICAvdXNlci97dXNlcklkfToKICAgICAgICBnZXQ6CiAgICAgICAgICAgIHN1bW1hcnk6IOiOt+WPlueUqOaIt+S/oeaBrwogICAgICAgICAgICBkZXNjcmlwdGlvbjog6I635Y+W55So5oi35L+h5oGvCiAgICAgICAgICAgIG9wZXJhdGlvbklkOiBHZXRVc2VySW5mbwogICAgICAgICAgICByZXNwb25zZXM6CiAgICAgICAgICAgICAgICAiMjAwIjoKICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjog5oiQ5YqfCiAgICAgICAgICAgICAgICAgICAgY29udGVudDoKICAgICAgICAgICAgICAgICAgICAgICAgYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04OgogICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NoZW1hOiBudWxsCnNlcnZlcnM6CiAgICAtIHVybDogaHR0cDovL2FwaS5leGFtcGxlLmNvbS92MQo=
   */
  specContentBase64?: string;
  /**
   * @remarks
   * The download URL of the API definition file. Must be either a publicly accessible Object Storage Service (OSS) URL or an OSS intranet endpoint within the same region. Requires download permissions. For OSS URLs that are not publicly readable, refer to [https://www.alibabacloud.com/help/en/oss/user-guide/how-to-obtain-the-url-of-a-single-object-or-the-urls-of-multiple-objects](https://help.aliyun.com/document_detail/39607.html) and use URLs with download permissions. Currently, only OSS URLs are supported.
   * 
   * @example
   * https://my-bucket.oss-cn-hangzhou.aliyuncs.com/my-api/api.yaml
   */
  specFileUrl?: string;
  /**
   * @remarks
   * The OSS configuration details.
   */
  specOssConfig?: ImportHttpApiRequestSpecOssConfig;
  /**
   * @remarks
   * The conflict resolution strategy when the API to be imported has the same name and version as an existing one. Valid values:
   * 
   * *   SpecOnly: full override.
   * *   SpecFirst: Merge with priority on the newly imported file. New APIs are created and existing ones are updated. APIs not included in the file remain unchanged.
   * *   ExistFirst (default): Merge with priority on existing APIs. New APIs are created but existing ones remain unchanged. If this parameter is not specified, the ExistFirst policy takes effect.
   * 
   * @example
   * ExistFirst
   */
  strategy?: string;
  /**
   * @remarks
   * The target REST API ID for direct updates. If specified, the import operation will directly update the designated API instead of creating new APIs or updating existing APIs based on the name and version. Only REST APIs can be specified.
   * 
   * @example
   * api-xxxx
   */
  targetHttpApiId?: string;
  /**
   * @remarks
   * The API versioning configuration. If versioning is enabled, an imported API that matches both the version number and the API name of an existing API will update that API. If versioning is disabled, an imported API that matches the API name of an existing API will update it.
   */
  versionConfig?: HttpApiVersionConfig;
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

