// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesRequestTags extends $dara.Model {
  /**
   * @example
   * test
   */
  key?: string;
  /**
   * @example
   * ys
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

export class DescribeInstancesRequest extends $dara.Model {
  /**
   * @example
   * X86
   */
  architectureType?: string;
  /**
   * @example
   * PRE
   */
  chargeType?: string;
  /**
   * @example
   * f-cn-wwo36qj4g06
   */
  instanceId?: string;
  /**
   * @example
   * e2e-test
   */
  instanceName?: string;
  /**
   * @example
   * e2e-test-default
   */
  namespaceName?: string;
  /**
   * @example
   * 2
   */
  pageIndex?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen
   */
  region?: string;
  resourceGroupId?: string;
  tags?: DescribeInstancesRequestTags[];
  static names(): { [key: string]: string } {
    return {
      architectureType: 'ArchitectureType',
      chargeType: 'ChargeType',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      namespaceName: 'NamespaceName',
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
      instanceName: 'string',
      namespaceName: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      region: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': DescribeInstancesRequestTags },
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

