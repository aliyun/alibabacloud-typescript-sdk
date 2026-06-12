// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceInstanceShrinkRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * value1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceInstanceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * A client token to ensure the idempotence of the request. Generate a unique value for this parameter from your client. The token can be up to 64 characters in length and can contain only ASCII characters.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. A dry run checks for permissions and instance status. Valid values:
   * 
   * - true: The system checks the request but does not create the service instance.
   * 
   * - false: The system sends the request. If the request passes the check, the service instance is created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The time when the service instance is released.
   * 
   * > Only service providers can set this parameter for their own service instances in managed scenarios.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2023-12-12T03:13:05Z
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the service instance. The name must meet the following requirements:
   * 
   * - It can be up to 64 characters in length.
   * 
   * - It must start with a letter or a digit and can contain letters, digits, hyphens (-), and underscores (_).
   * 
   * @example
   * TestName
   */
  name?: string;
  /**
   * @remarks
   * The parameters used to deploy the service instance.
   * 
   * > If the service instance includes information about the deployment region, specify that information in the deployment parameters.
   * 
   * @example
   * {
   *       "RegionId": "cn-hangzhou"
   *       "NodeCount": 3,
   *       "SystemDiskSize": 40,
   *       "InstancePassword": "******"
   * }
   */
  parametersShrink?: string;
  /**
   * @remarks
   * The ID of the region. Valid values:
   * 
   * - cn-hangzhou: China (Hangzhou)
   * 
   * - ap-southeast-1: Singapore
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
   * The ID of the service.
   * 
   * This parameter is required.
   * 
   * @example
   * service-0e6fca6a51a54420****
   */
  serviceId?: string;
  /**
   * @remarks
   * The version of the service.
   * 
   * @example
   * 1
   */
  serviceVersion?: string;
  /**
   * @remarks
   * The name of the specification package.
   * 
   * @example
   * Package 1
   */
  specificationName?: string;
  /**
   * @remarks
   * The custom tags.
   */
  tag?: CreateServiceInstanceShrinkRequestTag[];
  /**
   * @remarks
   * The name of the template. Specify this parameter if the service supports multiple templates.
   * 
   * @example
   * Template 1
   */
  templateName?: string;
  /**
   * @remarks
   * The ID of the user.
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
      parametersShrink: 'Parameters',
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
      parametersShrink: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      serviceId: 'string',
      serviceVersion: 'string',
      specificationName: 'string',
      tag: { 'type': 'array', 'itemType': CreateServiceInstanceShrinkRequestTag },
      templateName: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

