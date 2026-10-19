// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MasterNodeShutDownFailOverRequest extends $dara.Model {
  /**
   * @remarks
   * The resource type. Set the value to `instance`.
   * 
   * @example
   * instance
   */
  category?: string;
  /**
   * @remarks
   * - **Specify**: Specifies the data nodes.
   * - **Random**: The system randomly simulates a failure for one-fourth of the data nodes (rounded up to the nearest integer, with a minimum of 1). This parameter takes effect only when no data nodes are specified.
   * 
   * @example
   * Random
   */
  DBFaultMode?: string;
  /**
   * @remarks
   * The specified data nodes.
   * 
   * @example
   * r-rdsdavinx01003-db-0,r-rdsdavinx01003-db-1
   */
  DBNodes?: string;
  /**
   * @remarks
   * - **Hard**: Simulates an unrecoverable hardware failure. A switchover (HA) is directly triggered.
   * - **Soft** (default): Simulates a recoverable hardware failure. The system preferentially attempts to recover the failed node. If the recovery fails, a switchover (HA) is triggered.
   * 
   * @example
   * Hard
   */
  failMode?: string;
  /**
   * @remarks
   * The instance ID. You can call the [DescribeInstances](https://help.aliyun.com/document_detail/473778.html) operation to query the instance ID.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceId?: string;
  /**
   * @remarks
   * - **Specify**: Specifies the proxy nodes.
   * - **Random**: The system randomly simulates a failure for one-fourth of the proxy nodes (rounded up to the nearest integer, with a minimum of 1). This parameter takes effect only when no proxy nodes are specified.
   * 
   * @example
   * Specify
   */
  proxyFaultMode?: string;
  /**
   * @remarks
   * The specified proxy nodes.
   * 
   * @example
   * 6981,6982
   */
  proxyInstanceIds?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      DBFaultMode: 'DBFaultMode',
      DBNodes: 'DBNodes',
      failMode: 'FailMode',
      instanceId: 'InstanceId',
      proxyFaultMode: 'ProxyFaultMode',
      proxyInstanceIds: 'ProxyInstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      DBFaultMode: 'string',
      DBNodes: 'string',
      failMode: 'string',
      instanceId: 'string',
      proxyFaultMode: 'string',
      proxyInstanceIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

