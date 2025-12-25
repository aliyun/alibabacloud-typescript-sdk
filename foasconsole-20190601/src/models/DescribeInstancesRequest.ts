// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesRequestDescribeInstancesRequestTags extends $dara.Model {
  /**
   * @example
   * flink
   */
  key?: string;
  /**
   * @example
   * test
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

export class DescribeInstancesRequestDescribeInstancesRequest extends $dara.Model {
  architectureType?: string;
  /**
   * @example
   * PRE
   */
  chargeType?: string;
  /**
   * @example
   * 223493C7-FCA9-13D4-B75B-AF8B32F4****
   */
  instanceId?: string;
  /**
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @example
   * 2
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @example
   * rg-***
   */
  resourceGroupId?: string;
  tags?: DescribeInstancesRequestDescribeInstancesRequestTags[];
  static names(): { [key: string]: string } {
    return {
      architectureType: 'ArchitectureType',
      chargeType: 'ChargeType',
      instanceId: 'InstanceId',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      region: 'Region',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architectureType: 'string',
      chargeType: 'string',
      instanceId: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      region: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': DescribeInstancesRequestDescribeInstancesRequestTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  describeInstancesRequest?: DescribeInstancesRequestDescribeInstancesRequest;
  static names(): { [key: string]: string } {
    return {
      describeInstancesRequest: 'DescribeInstancesRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      describeInstancesRequest: DescribeInstancesRequestDescribeInstancesRequest,
    };
  }

  validate() {
    if(this.describeInstancesRequest && typeof (this.describeInstancesRequest as any).validate === 'function') {
      (this.describeInstancesRequest as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

