// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HttpApiDeployConfig } from "./HttpApiDeployConfig";
import { ImportHttpApiRequestSpecOssConfig } from "./ImportHttpApiRequestSpecOssConfig";
import { HttpApiVersionConfig } from "./HttpApiVersionConfig";


export class ImportHttpApiRequest extends $dara.Model {
  /**
   * @remarks
   * The deployment configuration.
   */
  deployConfigs?: HttpApiDeployConfig;
  /**
   * @remarks
   * The API description, which cannot exceed 255 bytes in length. If you do not specify a description, a description is extracted from the definition file.
   * 
   * @example
   * API for testing
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. If this parameter is set to true, a dry run is performed without importing the file.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The MCP route ID.
   */
  mcpRouteId?: string;
  /**
   * @remarks
   * The API name. If you do not specify a name, a name is extracted from the definition file. If a name and a versioning configuration already exist, the existing API definition is updated based on the strategy field.
   * 
   * @example
   * import-test
   */
  name?: string;
  /**
   * @remarks
   * [The resource group ID](https://help.aliyun.com/document_detail/151181.html).
   * 
   * @example
   * rg-acfm3q4zjh7fkki
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The Base64-encoded API definition. OAS 2.0 and OAS 3.0 specifications are supported. YAML and JSON formats are supported. This parameter precedes over the specFileUrl parameter. However, if the file size exceeds 10 MB, use the specFileUrl parameter to pass the definition.
   * 
   * @example
   * b3BlbmFwaTogMy4wLjAKaW5mbzoKICAgIHRpdGxlOiBkZW1vCiAgICBkZXNjcmlwdGlvbjogdGhpc2lzZGVtbwogICAgdmVyc2lvbjogIiIKcGF0aHM6CiAgICAvdXNlci97dXNlcklkfToKICAgICAgICBnZXQ6CiAgICAgICAgICAgIHN1bW1hcnk6IOiOt+WPlueUqOaIt+S/oeaBrwogICAgICAgICAgICBkZXNjcmlwdGlvbjog6I635Y+W55So5oi35L+h5oGvCiAgICAgICAgICAgIG9wZXJhdGlvbklkOiBHZXRVc2VySW5mbwogICAgICAgICAgICByZXNwb25zZXM6CiAgICAgICAgICAgICAgICAiMjAwIjoKICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjog5oiQ5YqfCiAgICAgICAgICAgICAgICAgICAgY29udGVudDoKICAgICAgICAgICAgICAgICAgICAgICAgYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04OgogICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NoZW1hOiBudWxsCnNlcnZlcnM6CiAgICAtIHVybDogaHR0cDovL2FwaS5leGFtcGxlLmNvbS92MQo=
   */
  specContentBase64?: string;
  /**
   * @remarks
   * The download URL of the API definition file. You can download the file over the Internet or by using an Object Storage Service (OSS) internal download URL that belongs to the current region. You must obtain the required permissions to download the file. For OSS URLs that are not publicly readable, refer to [Download objects using presigned URLs](https://help.aliyun.com/document_detail/39607.html) to specify URLs that provide download permissions. Currently, only OSS URLs are supported.
   * 
   * @example
   * https://my-bucket.oss-cn-hangzhou.aliyuncs.com/my-api/api.yaml
   */
  specFileUrl?: string;
  /**
   * @remarks
   * The OSS information.
   */
  specOssConfig?: ImportHttpApiRequestSpecOssConfig;
  /**
   * @remarks
   * The update policy when the API to be imported has the same version and name as an existing one. Valid values:
   * 
   * *   SpectOnly: All configurations in the file take effect.
   * *   SpecFirst: The file takes precedence. New APIs are created and existing ones are updated. APIs not included in the file remain unchanged.
   * *   ExistFirst (default): The existing APIs take precedence. New APIs are created but existing ones remain unchanged. If this parameter is not specified, the ExistFirst policy takes effect.
   * 
   * @example
   * ExistFirst
   */
  strategy?: string;
  /**
   * @remarks
   * The API to be updated. If this parameter is specified, this import updates only the specified API. New APIs are not created and unspecified existing APIs are not updated. Only REST APIs can be specified.
   * 
   * @example
   * api-xxxx
   */
  targetHttpApiId?: string;
  /**
   * @remarks
   * The API versioning configuration. If versioning is enabled for an API and the version and name of an API to be imported are the same as those of the existing API, the existing API is updated by this import. If versioning is not enabled for an API and the name of an API to be imported are the same as that of the existing API, the existing API is updated by this import.
   */
  versionConfig?: HttpApiVersionConfig;
  static names(): { [key: string]: string } {
    return {
      deployConfigs: 'deployConfigs',
      description: 'description',
      dryRun: 'dryRun',
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
      deployConfigs: HttpApiDeployConfig,
      description: 'string',
      dryRun: 'boolean',
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
    if(this.deployConfigs && typeof (this.deployConfigs as any).validate === 'function') {
      (this.deployConfigs as any).validate();
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

