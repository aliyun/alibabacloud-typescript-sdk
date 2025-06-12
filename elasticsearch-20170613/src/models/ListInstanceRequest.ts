// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * cn-hangzhou-i
   * 
   * @example
   * aliyunes_test1
   */
  description?: string;
  /**
   * @remarks
   * advanced
   * 
   * @example
   * 6.7_with_X-Pack
   */
  esVersion?: string;
  /**
   * @remarks
   * The number of data nodes.
   * 
   * @example
   * advanced
   */
  instanceCategory?: string;
  /**
   * @remarks
   * postpaid
   * 
   * @example
   * es-cn-v641a0ta3000g****
   */
  instanceId?: string;
  /**
   * @remarks
   * [{"tagKey":"key1","tagValue":"value1"}]
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * Specifies whether to include dedicated master nodes. Valid values:
   * 
   * *   true: The files contain data that is dumped to the IA storage medium.
   * *   false: The files do not contain data that is dumped to the IA storage medium.
   * 
   * @example
   * postpaid
   */
  paymentType?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * rg-aekzvowej3i****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * vpc-bp16k1dvzxtmagcva\\*\\*\\*\\*
   * 
   * @example
   * 10
   */
  size?: number;
  status?: string;
  /**
   * @remarks
   * The header of the response.
   * 
   * @example
   * [{"tagKey":"key1","tagValue":"value1"}]
   */
  tags?: string;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * vpc-bp16k1dvzxtmagcva****
   */
  vpcId?: string;
  /**
   * @remarks
   * The returned data.
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

