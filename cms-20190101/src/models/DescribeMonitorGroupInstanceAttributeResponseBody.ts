// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMonitorGroupInstanceAttributeResponseBodyResourcesResourceRegion extends $dara.Model {
  /**
   * @remarks
   * The zone.
   * 
   * @example
   * cn-hangzhou-f
   */
  availabilityZone?: string;
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
      availabilityZone: 'AvailabilityZone',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availabilityZone: 'string',
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

export class DescribeMonitorGroupInstanceAttributeResponseBodyResourcesResourceTagsTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * instanceNetworkType
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * VPC
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

export class DescribeMonitorGroupInstanceAttributeResponseBodyResourcesResourceTags extends $dara.Model {
  tag?: DescribeMonitorGroupInstanceAttributeResponseBodyResourcesResourceTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeMonitorGroupInstanceAttributeResponseBodyResourcesResourceTagsTag },
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

export class DescribeMonitorGroupInstanceAttributeResponseBodyResourcesResourceVpc extends $dara.Model {
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-2zew7etgiceg21****
   */
  vpcInstanceId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-2ze36seq79n992****
   */
  vswitchInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      vpcInstanceId: 'VpcInstanceId',
      vswitchInstanceId: 'VswitchInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcInstanceId: 'string',
      vswitchInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupInstanceAttributeResponseBodyResourcesResource extends $dara.Model {
  /**
   * @remarks
   * The name of the cloud service.
   * 
   * @example
   * ecs
   */
  category?: string;
  /**
   * @remarks
   * The resource description.
   * 
   * @example
   * desc_test
   */
  desc?: string;
  /**
   * @remarks
   * The dimensions of the resource that is associated with the application group.
   * 
   * @example
   * {"instanceId":"i-m5e0k0bexac8tykr****"}
   */
  dimension?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-m5e0k0bexac8tykr****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * hostName
   */
  instanceName?: string;
  /**
   * @remarks
   * The network type.
   * 
   * @example
   * vpc
   */
  networkType?: string;
  /**
   * @remarks
   * The region.
   */
  region?: DescribeMonitorGroupInstanceAttributeResponseBodyResourcesResourceRegion;
  /**
   * @remarks
   * The tag of the resource.
   */
  tags?: DescribeMonitorGroupInstanceAttributeResponseBodyResourcesResourceTags;
  /**
   * @remarks
   * The VPC description.
   */
  vpc?: DescribeMonitorGroupInstanceAttributeResponseBodyResourcesResourceVpc;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      desc: 'Desc',
      dimension: 'Dimension',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      networkType: 'NetworkType',
      region: 'Region',
      tags: 'Tags',
      vpc: 'Vpc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      desc: 'string',
      dimension: 'string',
      instanceId: 'string',
      instanceName: 'string',
      networkType: 'string',
      region: DescribeMonitorGroupInstanceAttributeResponseBodyResourcesResourceRegion,
      tags: DescribeMonitorGroupInstanceAttributeResponseBodyResourcesResourceTags,
      vpc: DescribeMonitorGroupInstanceAttributeResponseBodyResourcesResourceVpc,
    };
  }

  validate() {
    if(this.region && typeof (this.region as any).validate === 'function') {
      (this.region as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    if(this.vpc && typeof (this.vpc as any).validate === 'function') {
      (this.vpc as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupInstanceAttributeResponseBodyResources extends $dara.Model {
  resource?: DescribeMonitorGroupInstanceAttributeResponseBodyResourcesResource[];
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: { 'type': 'array', 'itemType': DescribeMonitorGroupInstanceAttributeResponseBodyResourcesResource },
    };
  }

  validate() {
    if(Array.isArray(this.resource)) {
      $dara.Model.validateArray(this.resource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupInstanceAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The responses code.
   * 
   * >  The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * The specified resource is not found.
   */
  message?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 2
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9FB8EA79-7279-4482-8D6D-3D28EEDD871A
   */
  requestId?: string;
  /**
   * @remarks
   * The resources that are associated with the application group.
   */
  resources?: DescribeMonitorGroupInstanceAttributeResponseBodyResources;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 12
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      resources: 'Resources',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      resources: DescribeMonitorGroupInstanceAttributeResponseBodyResources,
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(this.resources && typeof (this.resources as any).validate === 'function') {
      (this.resources as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

