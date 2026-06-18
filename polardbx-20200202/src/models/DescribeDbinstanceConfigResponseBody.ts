// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The configuration key.
   * 
   * @example
   * htap
   */
  configName?: string;
  /**
   * @remarks
   * The configuration item. The following parameters are included:
   * 
   * - attendHtapList: the list of instances for which HTAP is enabled.
   * - autoAttendHtap: specifies whether to automatically add newly created read-only instances to the HTAP list.
   * - delayExecutionStrategy: when the read-only instance lag reaches the value specified by storageDelayThreshold, read-only traffic is routed back to the primary instance. Default value: 1. Valid values: 0 and 1.
   * - enableConsistentReplicaRead: specifies whether to enable consistent reads.
   * - storageDelayThreshold: the latency threshold for read-only instances. Default value: 3s. Valid values: 0 to 86400.
   * - enableHtap: specifies whether to enable HTAP.
   * - masterReadWeight: the read weight of the primary node. A value of 100 indicates that 100% of traffic is routed to the primary node. Valid values: 0 to 100.
   * 
   * @example
   * {\\"attendHtapList\\":[\\"pxc-hzruyzes08****\\"],\\"autoAttendHtap\\":\\"true\\",\\"delayExecutionStrategy\\":1,\\"enableConsistentReplicaRead\\":true,\\"enableHtap\\":\\"true\\",\\"masterReadWeight\\":100,\\"storageDelayThreshold\\":3}
   */
  configValue?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * pxc-sprcym7g7w****
   */
  dbInstanceName?: string;
  static names(): { [key: string]: string } {
    return {
      configName: 'ConfigName',
      configValue: 'ConfigValue',
      dbInstanceName: 'DbInstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configName: 'string',
      configValue: 'string',
      dbInstanceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data struct.
   */
  data?: DescribeDBInstanceConfigResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C458B1E8-1683-3645-B154-6BA32080EEA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeDBInstanceConfigResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

