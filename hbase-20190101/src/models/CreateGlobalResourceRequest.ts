// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGlobalResourceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is automatically populated when the request is sent. You do not need to specify this parameter.
   * 
   * @example
   * xxxxx-xxxxx-xxxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the target instance. You can call the DescribeInstances operation to obtain the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * hb-t4naqsay5gn****
   */
  clusterId?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource name. Valid values:
   * 
   * - HbaseSLBThriftVip: Thrift SLB EPS resource.
   * 
   * - SolrSlbVip: Solr SLB EPS resource.
   * 
   * - PhoenixSLBQueryServerVip: Phoenix SLB EPS resource.
   * 
   * - PubHbaseSLBThriftVip: Thrift SLB public network resource.
   * 
   * - PubPhoenixSLBQueryServerVip: Phoenix SLB public network resource.
   * 
   * This parameter is required.
   * 
   * @example
   * PubPhoenixSLBQueryServerVip
   */
  resourceName?: string;
  /**
   * @remarks
   * The resource type. Set the value to **GLOBAL_VIP**.
   * 
   * This parameter is required.
   * 
   * @example
   * GLOBAL_VIP
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      clusterId: 'ClusterId',
      regionId: 'RegionId',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      clusterId: 'string',
      regionId: 'string',
      resourceName: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

