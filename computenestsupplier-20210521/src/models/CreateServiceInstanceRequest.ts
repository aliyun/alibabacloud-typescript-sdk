// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateServiceInstanceRequestTag } from "./CreateServiceInstanceRequestTag";


export class CreateServiceInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run for the request to check information such as the permissions and instance status. Valid values:
   * 
   * *   true: performs a dry run for the request, but does not create a service instance.
   * *   false: performs a dry run for the request, and creates a service instance if the request passes the dry run.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The time when the service instance was released.
   * 
   * >  This parameter is available only for the service instances that are managed by service providers.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2023-12-12T03:13:05Z
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the service instance. The value must meet the following requirements:
   * 
   * *   The name cannot exceed 64 characters in length.
   * *   It can contain digits, letters, hyphens (-), and underscores (_). It must start with a digit or a letter.
   * 
   * @example
   * TestName
   */
  name?: string;
  /**
   * @remarks
   * The parameters that are specified for service instance deployment.
   * 
   * >  If you want to specify the region in which the service instance is deployed, you must specify the information in Parameters.
   * 
   * @example
   * {"NodeCount": 3, "SystemDiskSize": 40, "InstancePassword": "******"}
   */
  parameters?: { [key: string]: any };
  /**
   * @remarks
   * The region ID. Valid values:
   * 
   * *   cn-hangzhou: China (Hangzhou)
   * *   ap-southeast-1: Singapore
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aekzuqyxxxxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * service-0e6fca6a51a54420****
   */
  serviceId?: string;
  /**
   * @remarks
   * The service version.
   * 
   * @example
   * 1
   */
  serviceVersion?: string;
  /**
   * @remarks
   * The name of the package specification.
   * 
   * @example
   * 套餐一
   */
  specificationName?: string;
  /**
   * @remarks
   * The custom tags.
   */
  tag?: CreateServiceInstanceRequestTag[];
  /**
   * @remarks
   * The template name. You must specify a template name if the service supports multiple templates.
   * 
   * @example
   * 模板1
   */
  templateName?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1563457855xxxxxx
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      endTime: 'EndTime',
      name: 'Name',
      parameters: 'Parameters',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      serviceId: 'ServiceId',
      serviceVersion: 'ServiceVersion',
      specificationName: 'SpecificationName',
      tag: 'Tag',
      templateName: 'TemplateName',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      endTime: 'string',
      name: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      regionId: 'string',
      resourceGroupId: 'string',
      serviceId: 'string',
      serviceVersion: 'string',
      specificationName: 'string',
      tag: { 'type': 'array', 'itemType': CreateServiceInstanceRequestTag },
      templateName: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

