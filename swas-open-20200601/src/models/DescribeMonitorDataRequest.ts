// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMonitorDataRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The **token** can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The end of the time range to query. The following formats are supported:
   * 
   * - UNIX timestamp: the number of milliseconds that have elapsed since 00:00:00 January 1, 1970.
   * 
   * - Time format: YYYY-MM-DDThh:mm:ssZ.
   * 
   * > The interval between the start time and the end time is less than or equal to 31 days.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-09-08T08:04:44Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the simple application server.
   * 
   * This parameter is required.
   * 
   * @example
   * 2ad1ae67295445f598017499dc****
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 1440.
   * 
   * @example
   * 100
   */
  length?: string;
  /**
   * @remarks
   * The name of the metric. Valid values:
   * 
   * - MEMORY_ACTUALUSEDSPACE: the memory usage. Unit: bytes.
   * 
   * - DISKUSAGE_USED: the disk usage. Unit: bytes.
   * 
   * - CPU_UTILIZATION: the CPU usage, in percentage.
   * 
   * - VPC_PUBLICIP_INTERNETOUT_RATE: the outbound bandwidth. Unit: bits/s.
   * 
   * - VPC_PUBLICIP_INTERNETIN_RATE: the inbound bandwidth. Unit: bits/s.
   * 
   * - DISK_READ_IOPS: the read IOPS of the disk. Unit: count/s.
   * 
   * - DISK_WRITE_IOPS: the write IOPS of the disk. Unit: count/s.
   * 
   * - FLOW_USED: the traffic usage. Unit: bytes.
   * 
   * This parameter is required.
   * 
   * @example
   * DISKUSAGE_USED
   */
  metricName?: string;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6nOc1nj4M9UaAZ/I8db***
   */
  nextToken?: string;
  /**
   * @remarks
   * The interval at which the monitoring data is queried. Valid values: 60, 300, and 900. Unit: seconds.
   * 
   * > If MetricName is set to FLOW_USED, set Period to 3600 (one hour). In other cases, set Period based on your business requirements.
   * 
   * This parameter is required.
   * 
   * @example
   * 60
   */
  period?: string;
  /**
   * @remarks
   * The region ID of the simple application server. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The following formats are supported:
   * 
   * - UNIX timestamp: the number of milliseconds that have elapsed since 00:00:00 January 1, 1970.
   * 
   * - Time format: YYYY-MM-DDThh:mm:ssZ.
   * 
   * > * The specified time range includes the end time and excludes the start time. The start time must be earlier than the end time.
   * >
   * > * The interval between the start time and the end time is less than or equal to 31 days.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-09-07T04:04:44Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      length: 'Length',
      metricName: 'MetricName',
      nextToken: 'NextToken',
      period: 'Period',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      endTime: 'string',
      instanceId: 'string',
      length: 'string',
      metricName: 'string',
      nextToken: 'string',
      period: 'string',
      regionId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

