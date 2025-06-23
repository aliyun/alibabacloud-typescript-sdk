// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSystemLogResponseBodySystemLog extends $dara.Model {
  /**
   * @remarks
   * The IP address of the instance.
   * 
   * @example
   * 203.107.XX.XX
   */
  entityObject?: string;
  /**
   * @remarks
   * The type of the system log. The value is fixed as **20**, which indicates the billing logs for burstable clean bandwidth.
   * 
   * @example
   * 20
   */
  entityType?: number;
  /**
   * @remarks
   * The time when the bill was generated. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1631793531000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The time when the bill was last modified. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1635425407000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the bill belongs.
   * 
   * @example
   * 171986973287****
   */
  opAccount?: string;
  /**
   * @remarks
   * The operation type. The value is fixed as **100**, which indicates the billing logs for the burstable clean bandwidth that you increased.
   * 
   * @example
   * 100
   */
  opAction?: number;
  /**
   * @remarks
   * The details of the bill. The value is a string that consists of a JSON struct. The JSON struct contains the following fields:
   * 
   * *   **newEntity**: the bill record, which contains the following fields. Data type: object.
   * 
   *     *   **billValue**: the usage of the burstable clean bandwidth within a month. Unit: Mbit/s. Data type: integer.
   *     *   **instanceId**: the ID of the instance. Data type: string.
   *     *   **ip**: the IP address of the instance. Data type: string.
   *     *   **maxBw**: the peak service traffic (monthly 95th percentile bandwidth) within a month. Unit: Mbit/s. Data type: string.
   *     *   **month**: the month in which the bill of the previous calendar month is issued. This value is a UNIX timestamp. Unit: milliseconds. Data type: long.
   *     *   **overBandwidth**: the peak service traffic minus the clean bandwidth of the instance. Unit: Mbit/s. Data type: integer.
   *     *   **peakTime**: the time in point of the peak service traffic that is measured for billing. This value is a UNIX timestamp. Unit: seconds. Data type: long.
   *     *   **startTimestamp**: the beginning of the time range for the peak service traffic range. This value is a UNIX timestamp. Unit: seconds. Data type: long.
   * 
   * @example
   * {"newEntity":{"billValue":"60","instanceId":"ddoscoo-cn-zz121ogz****","ip":"203.107.XX.XX","maxBw":"300","month":1627747200000,"overBandwidth":"120","peakTime":1629871200,"startTimestamp":1629871200}}
   */
  opDesc?: string;
  /**
   * @remarks
   * The status of the bill. Valid values:
   * 
   * *   **0**: to be billed
   * *   **1**: billed
   * *   **2**: terminated
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      entityObject: 'EntityObject',
      entityType: 'EntityType',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      opAccount: 'OpAccount',
      opAction: 'OpAction',
      opDesc: 'OpDesc',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityObject: 'string',
      entityType: 'number',
      gmtCreate: 'number',
      gmtModified: 'number',
      opAccount: 'string',
      opAction: 'number',
      opDesc: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

