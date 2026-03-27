// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVSwitchesResponseBodyData extends $dara.Model {
  /**
   * @example
   * 246
   */
  availableIpAddressCount?: string;
  /**
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @example
   * vsw-2vc18rvxe1hk5dcsyy650
   */
  vSwitchId?: string;
  /**
   * @example
   * test
   */
  vSwitchName?: string;
  /**
   * @remarks
   * vpcid。
   * 
   * @example
   * vpc-2ze7b7cfxmxypkodyg5io
   */
  vpcId?: string;
  /**
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
   * @example
   * 200
   */
  code?: string;
  data?: DescribeVSwitchesResponseBodyData[];
  /**
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 2D7E6B28-27C9-5EEA-B0A3-FC0D2F5B2263
   */
  requestId?: string;
  success?: boolean;
  /**
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

