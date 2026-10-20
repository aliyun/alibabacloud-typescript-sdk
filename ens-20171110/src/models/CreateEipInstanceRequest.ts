// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEipInstanceRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the instance. Valid values of N: **1** to **20**.
   * 
   * - Cannot start with `aliyun`, `acs:`, `http://`, or `https://`.
   * - Can be up to 64 characters in length.
   * - Cannot be an empty string.
   * 
   * @example
   * team
   */
  key?: string;
  /**
   * @remarks
   * The tag value. The tag value can be up to 128 characters in length and cannot start with `aliyun` or `acs:`, or contain `http://` or `https://`.
   * 
   * @example
   * tagValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEipInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The peak bandwidth of the EIP. Default value: 5. Valid values: 5 to 10000. Unit: Mbit/s.
   * 
   * @example
   * 5
   */
  bandwidth?: number;
  /**
   * @remarks
   * Ensures the idempotence of the request to prevent duplicate operations caused by multiple retries.
   * 
   * - Generate a parameter value from your client and make sure that the value is unique among different requests. ClientToken supports only ASCII characters and cannot exceed 64 characters in length.
   * 
   * - If you use a ClientToken that has been used before and the other request parameters remain unchanged, the client receives the same result as the first submission, without affecting the server-side state.
   * 
   * - You can retry when the API times out or returns the PROCESSING error code. Idempotence is effective in this case. If the response returns an HTTP 200 status code, the retry returns the same result as the previous call without affecting the server-side state. If the response returns an HTTP 4xx status code and the error code is not PROCESSING, idempotence is not effective.
   * 
   * - The ClientToken is valid for 10 minutes.
   * 
   * @example
   * 26C28756-2586-17AF-B802-0DC50D8FDEBB
   */
  clientToken?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * yourDescription
   */
  description?: string;
  /**
   * @remarks
   * The ID of the Edge Node Service (ENS) edge zone.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-suzhou-telecom
   */
  ensRegionId?: string;
  /**
   * @remarks
   * Billable methods of the EIP. Currently, only **PostPaid** (pay-as-you-go billing method) is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The instance ID of the EIP.
   */
  instanceId?: string;
  /**
   * @remarks
   * Billable methods of the EIP. Currently, only **95BandwidthByMonth** (monthly 95th percentile bandwidth billing) is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * 95BandwidthByMonth
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The IP address.
   */
  ipAddress?: string;
  /**
   * @remarks
   * The Internet service provider (ISP). Valid values:
   * 
   * - **cmcc**: China Mobile.
   * - **unicom**: China Unicom.
   * - **telecom**: China Telecom.
   * 
   * @example
   * cmcc
   */
  isp?: string;
  /**
   * @remarks
   * The name of the EIP instance.
   * 
   * @example
   * EIP1
   */
  name?: string;
  /**
   * @remarks
   * The resource tags.
   */
  tag?: CreateEipInstanceRequestTag[];
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      clientToken: 'ClientToken',
      description: 'Description',
      ensRegionId: 'EnsRegionId',
      instanceChargeType: 'InstanceChargeType',
      instanceId: 'InstanceId',
      internetChargeType: 'InternetChargeType',
      ipAddress: 'IpAddress',
      isp: 'Isp',
      name: 'Name',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      clientToken: 'string',
      description: 'string',
      ensRegionId: 'string',
      instanceChargeType: 'string',
      instanceId: 'string',
      internetChargeType: 'string',
      ipAddress: 'string',
      isp: 'string',
      name: 'string',
      tag: { 'type': 'array', 'itemType': CreateEipInstanceRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

