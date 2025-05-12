// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceInstancesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   PrePaid: subscription.
   * *   PostPaid: pay-as-you-go.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The keyword used to query instances. Instances can be queried by instance ID or instance IP address.
   * 
   * @example
   * 10.224.xx.xx
   */
  filter?: string;
  /**
   * @remarks
   * The IP address of the instance.
   * 
   * @example
   * 10.224.xx.xx
   */
  instanceIP?: string;
  /**
   * @remarks
   * The instance ID. For more information about how to query the instance ID, see [ListResourceInstances](https://help.aliyun.com/document_detail/412129.html).
   * 
   * @example
   * i-bp1jd6x3uotsv****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * e-xxxx***
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance state.
   * 
   * Valid values:
   * 
   * *   Ready-SchedulingDisabled
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     The instance is available but unschedulable
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   Ready
   * 
   *     <!-- -->
   * 
   *     : The instance
   * 
   *     <!-- -->
   * 
   *     is running
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   NotReady
   * 
   *     <!-- -->
   * 
   *     : The instance is unready.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Stopped
   * 
   *     <!-- -->
   * 
   *     : The instance has stopped.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   NotReady-SchedulingDisabled
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     The instance is unavailable and unschedulable
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   Attaching
   * 
   *     <!-- -->
   * 
   *     : The instance
   * 
   *     <!-- -->
   * 
   *     is starting
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   Deleting
   * 
   *     <!-- -->
   * 
   *     : The instance is being deleted.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   CreateFailed: The instance failed to be created.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * Ready
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The tag.
   */
  labelShrink?: string;
  /**
   * @remarks
   * The sorting order.
   * 
   * Valid values:
   * 
   * *   asc: The instances are sorted in ascending order.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   desc
   * 
   *     <!-- -->
   * 
   *     : The instances are sorted in descending order.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The field that you use to sort the query results.
   * 
   * Valid values:
   * 
   * *   CreateTime
   * 
   *     <!-- -->
   * 
   *     : The instances are sorted based on the time when the instances were created.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   MemoryUsed
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     The instances are sorted based on the memory usage of the instances
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   GpuUsed
   * 
   *     <!-- -->
   * 
   *     : The instances are sorted based on the
   * 
   *     <!-- -->
   * 
   *     GPU usage of the instances.
   * 
   *     <!-- -->
   * 
   * *   ExpireTime: The instances are sorted based on the time when the instances expired.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   CpuUsed
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     The instances are sorted based on the CPU utilization of the instances.
   * 
   *     <!-- -->
   * 
   * @example
   * CreateTime
   */
  sort?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      filter: 'Filter',
      instanceIP: 'InstanceIP',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceStatus: 'InstanceStatus',
      labelShrink: 'Label',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sort: 'Sort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      filter: 'string',
      instanceIP: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceStatus: 'string',
      labelShrink: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sort: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

