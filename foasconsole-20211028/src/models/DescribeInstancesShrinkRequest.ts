// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesShrinkRequest extends $dara.Model {
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
  tagsShrink?: string;
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
      tagsShrink: 'Tags',
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
      tagsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

