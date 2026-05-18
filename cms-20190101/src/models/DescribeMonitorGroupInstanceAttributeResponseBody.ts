// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMonitorGroupInstanceAttributeResponseBodyResourcesResourceRegion extends $dara.Model {
  availabilityZone?: string;
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
  key?: string;
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
  vpcInstanceId?: string;
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
  category?: string;
  desc?: string;
  dimension?: string;
  instanceId?: string;
  instanceName?: string;
  networkType?: string;
  region?: DescribeMonitorGroupInstanceAttributeResponseBodyResourcesResourceRegion;
  tags?: DescribeMonitorGroupInstanceAttributeResponseBodyResourcesResourceTags;
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

