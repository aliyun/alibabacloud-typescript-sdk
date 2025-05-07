// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceResponseBodyDetails } from "./DescribeInstanceResponseBodyDetails";


export class DescribeInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the WAF instance.
   */
  details?: DescribeInstanceResponseBodyDetails;
  /**
   * @remarks
   * The edition of the WAF instance.
   * 
   * @example
   * default_version
   */
  edition?: string;
  /**
   * @remarks
   * The expiration time of the WAF instance.
   * 
   * @example
   * 4809859200000
   */
  endTime?: number;
  /**
   * @remarks
   * Indicates whether the WAF instance has overdue payments. Valid values:
   * 
   * *   **0**: The WAF instance does not have overdue payments.
   * *   **1**: The WAF instance has overdue payments.
   * 
   * @example
   * 1
   */
  inDebt?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * @example
   * waf-cn-xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The billing method of the WAF instance. Valid values:
   * 
   * *   **POSTPAY:** The WAF instance uses the pay-as-you-go billing method.
   * *   **PREPAY:** The WAF instance uses the subscription billing method.
   * 
   * @example
   * POSTPAY
   */
  payType?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * *   **cn-hangzhou:** the Chinese mainland
   * *   **ap-southeast-1:** outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 66A98669-CC6E-4F3E-80A6-3014697B11AE
   */
  requestId?: string;
  /**
   * @remarks
   * The purchase time of the WAF instance. The time is in the UNIX timestamp format. The time is displayed in UTC. Unit: milliseconds.
   * 
   * @example
   * 1668496310000
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the WAF instance. Valid values:
   * 
   * *   **1:** The WAF instance is in a normal state.
   * *   **2:** The WAF instance has expired.
   * *   **3:** The WAF instance has been released.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      details: 'Details',
      edition: 'Edition',
      endTime: 'EndTime',
      inDebt: 'InDebt',
      instanceId: 'InstanceId',
      payType: 'PayType',
      regionId: 'RegionId',
      requestId: 'RequestId',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      details: DescribeInstanceResponseBodyDetails,
      edition: 'string',
      endTime: 'number',
      inDebt: 'string',
      instanceId: 'string',
      payType: 'string',
      regionId: 'string',
      requestId: 'string',
      startTime: 'number',
      status: 'number',
    };
  }

  validate() {
    if(this.details && typeof (this.details as any).validate === 'function') {
      (this.details as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

