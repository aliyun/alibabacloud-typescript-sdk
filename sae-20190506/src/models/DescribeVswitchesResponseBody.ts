// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVSwitchesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of available IP addresses.
   * 
   * @example
   * 246
   */
  availableIpAddressCount?: string;
  /**
   * @remarks
   * The batch status. Valid values:
   * 
   * - Available: Available.
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-2vc18rvxe1hk5dcsyy650
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The name of the vSwitch.
   * 
   * @example
   * test
   */
  vSwitchName?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-2ze7b7cfxmxypkodyg5io
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-beijing-l
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      availableIpAddressCount: 'AvailableIpAddressCount',
      status: 'Status',
      vSwitchId: 'VSwitchId',
      vSwitchName: 'VSwitchName',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableIpAddressCount: 'string',
      status: 'string',
      vSwitchId: 'string',
      vSwitchName: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVSwitchesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The API status code or POP error code. Valid values:
   * 
   * - **2xx**: Success.
   * - **3xx**: Redirection.
   * - **4xx**: Request error.
   * - **5xx**: Server error.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: DescribeVSwitchesResponseBodyData[];
  /**
   * @remarks
   * The error code. Valid values:
   * 
   * - Successful request: The **ErrorCode** field is not returned.
   * - Failed request: The **ErrorCode** field is returned. For more information, see the **Error codes** section in this topic.
   * 
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @remarks
   * The additional information. Valid values:
   * 
   * - **success**: The request is successful.
   * - Specific error code: The request is abnormal.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2D7E6B28-27C9-5EEA-B0A3-FC0D2F5B2263
   */
  requestId?: string;
  /**
   * @remarks
   * Specifies whether the creation or update is successful. Valid values:
   * 
   * - Successful.
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID.
   * 
   * @example
   * 0a001a0817594572118465681d2341
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': DescribeVSwitchesResponseBodyData },
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

