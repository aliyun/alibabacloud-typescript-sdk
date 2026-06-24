// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The instance name. Fuzzy search is supported. For example, if you search for all instances matching **abc**, all instances named **abc**, **abcde**, **xyabc**, and **xabcy** may be returned.
   * 
   * @example
   * aliyunes_test1
   */
  description?: string;
  /**
   * @remarks
   * The instance version.
   * 
   * @example
   * 6.7_with_X-Pack
   */
  esVersion?: string;
  /**
   * @remarks
   * The edition type of the instance. Valid values:
   * 
   * - x-pack: Commercial Edition
   * 
   * - advanced/IS: Enhanced Edition
   * 
   * - community: Basic Edition
   * 
   * @example
   * advanced
   */
  instanceCategory?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * es-cn-v641a0ta3000g****
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number of the instance list.
   * Start value: **1**, default value: **1**.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * - postpaid: pay-as-you-go
   * 
   * - prepaid: subscription
   * 
   * @example
   * postpaid
   */
  paymentType?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-aekzvowej3i****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The number of entries per page for paginated queries. Maximum value: **100**, default value: **10**.
   * 
   * @example
   * 10
   */
  size?: number;
  status?: string;
  /**
   * @remarks
   * The instance tags.
   * 
   * @example
   * [{"tagKey":"key1","tagValue":"value1"}]
   */
  tags?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) where the instance is deployed.
   * 
   * @example
   * vpc-bp16k1dvzxtmagcva****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID of the instance.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      esVersion: 'esVersion',
      instanceCategory: 'instanceCategory',
      instanceId: 'instanceId',
      page: 'page',
      paymentType: 'paymentType',
      resourceGroupId: 'resourceGroupId',
      size: 'size',
      status: 'status',
      tags: 'tags',
      vpcId: 'vpcId',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      esVersion: 'string',
      instanceCategory: 'string',
      instanceId: 'string',
      page: 'number',
      paymentType: 'string',
      resourceGroupId: 'string',
      size: 'number',
      status: 'string',
      tags: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

