// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The processor architecture. Valid values: x86 and ARM.
   * 
   * @example
   * X86
   */
  architectureType?: string;
  /**
   * @remarks
   * The billing method.
   * 
   * @example
   * PRE
   */
  chargeType?: string;
  /**
   * @remarks
   * Specifies whether hybrid billing is enabled.
   * 
   * @example
   * true
   */
  elastic?: boolean;
  /**
   * @remarks
   * The instance ID of the order.
   * 
   * @example
   * f-cn-wwo36qj4g06
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * e2e-test
   */
  instanceName?: string;
  /**
   * @remarks
   * The namespace name.
   * 
   * @example
   * e2e-test-default
   */
  namespaceName?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 2
   */
  pageIndex?: number;
  /**
   * @remarks
   * The paging Settings for the number of entries per page in a paged query. Maximum value: 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen
   */
  region?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-aek2e55emewbqgy
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags of the instance.
   */
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      architectureType: 'ArchitectureType',
      chargeType: 'ChargeType',
      elastic: 'Elastic',
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
      elastic: 'boolean',
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

