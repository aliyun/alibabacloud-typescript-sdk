// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProbeTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Maximum value: **50**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the probe task.
   * 
   * @example
   * probe-****
   */
  probeTaskId?: string;
  /**
   * @remarks
   * The protocol of the probe task. Valid values:
   * 
   * *   **ICMP**
   * *   **TCP**
   * *   **HTTP**
   * 
   * >  Tasks that probe private networks support only ICMP and TCP.
   * 
   * @example
   * ICMP
   */
  protocol?: string;
  /**
   * @remarks
   * The region ID of the SAG instance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/69813.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the SAG instance.
   * 
   * @example
   * sag-****
   */
  sagId?: string;
  /**
   * @remarks
   * The name of the SAG instance.
   * 
   * @example
   * shanghai-office
   */
  sagName?: string;
  /**
   * @remarks
   * The serial number of the SAG device.
   * 
   * @example
   * sag****
   */
  sn?: string;
  /**
   * @remarks
   * The name of the probe task.
   * 
   * @example
   * test-ping
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      probeTaskId: 'ProbeTaskId',
      protocol: 'Protocol',
      regionId: 'RegionId',
      sagId: 'SagId',
      sagName: 'SagName',
      sn: 'Sn',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      probeTaskId: 'string',
      protocol: 'string',
      regionId: 'string',
      sagId: 'string',
      sagName: 'string',
      sn: 'string',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

