// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MasterNodeShutDownFailOverRequest extends $dara.Model {
  /**
   * @remarks
   * The resource category. Set the value to instance.
   * 
   * @example
   * instance
   */
  category?: string;
  /**
   * @remarks
   * *   Specify: This mode allows you to specify a database node to use.
   * *   Random: In this mode, a random database node is selected when no database node is specified.
   * 
   * @example
   * Random
   */
  DBFaultMode?: string;
  /**
   * @remarks
   * The IDs of the database nodes.
   * 
   * @example
   * r-rdsdavinx01003-db-0,r-rdsdavinx01003-db-1
   */
  DBNodes?: string;
  /**
   * @remarks
   * *   **Hard**: stimulates a hardware failure that cannot be recovered. In this case, a high-availability switchover is triggered.
   * *   **Soft** (default): stimulates a hardware failure that can be recovered. In this case, the system first attempts to recover the faulty node. If the attempt fails, a high-availability switchover is triggered.
   * 
   * Valid values:
   * 
   * *   Safe
   * *   UnSafe
   * *   Hard
   * *   Soft
   * 
   * @example
   * Safe
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
   * *   Specify: This mode allows you to specify a proxy node to use.
   * *   Random: In this mode, a random proxy node is selected when no proxy node is specified.
   * 
   * @example
   * Specify
   */
  proxyFaultMode?: string;
  /**
   * @remarks
   * The IDs of the proxy nodes.
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

