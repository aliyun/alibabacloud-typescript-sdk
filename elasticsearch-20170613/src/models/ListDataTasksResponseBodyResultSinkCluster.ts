// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataTasksResponseBodyResultSinkCluster extends $dara.Model {
  /**
   * @remarks
   * The type of the target cluster. Default value: elasticsearch.
   * 
   * @example
   * 1
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The public network access address of the target cluster.
   * 
   * @example
   * http://192.168.xx.xx:4101
   */
  endpoint?: string;
  /**
   * @remarks
   * The target index.
   * 
   * @example
   * product_info
   */
  index?: string;
  /**
   * @remarks
   * The type of the destination index.
   * 
   * @example
   * _doc
   */
  type?: string;
  /**
   * @remarks
   * The ID of the VPC to which the cluster belongs.
   * 
   * @example
   * vpc-2ze55voww95g82gak****
   */
  vpcId?: string;
  /**
   * @remarks
   * The instance ID or Server Load Balancer (SLB) ID of the current cluster.
   * 
   * @example
   * es-cn-09k1rnu3g0002****-worker
   */
  vpcInstanceId?: string;
  /**
   * @remarks
   * The access port number of the cluster.
   * 
   * @example
   * 9200
   */
  vpcInstancePort?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceType: 'dataSourceType',
      endpoint: 'endpoint',
      index: 'index',
      type: 'type',
      vpcId: 'vpcId',
      vpcInstanceId: 'vpcInstanceId',
      vpcInstancePort: 'vpcInstancePort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceType: 'string',
      endpoint: 'string',
      index: 'string',
      type: 'string',
      vpcId: 'string',
      vpcInstanceId: 'string',
      vpcInstancePort: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

