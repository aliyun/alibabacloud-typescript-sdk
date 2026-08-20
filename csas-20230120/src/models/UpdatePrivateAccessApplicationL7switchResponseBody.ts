// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePrivateAccessApplicationL7SwitchResponseBodyL7SwitchPortRanges extends $dara.Model {
  /**
   * @remarks
   * The start port. The value must be less than or equal to the end port.
   * 
   * @example
   * 80
   */
  begin?: number;
  /**
   * @remarks
   * The end port. The value must be greater than or equal to the start port.
   * 
   * @example
   * 81
   */
  end?: number;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      end: 'End',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      end: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePrivateAccessApplicationL7SwitchResponseBodyL7Switch extends $dara.Model {
  /**
   * @remarks
   * The ID of the internal-facing application.
   * 
   * @example
   * pa-application-e12860ef6c48****
   */
  applicationId?: string;
  /**
   * @remarks
   * The device tag mark switch. Valid values:
   * - **Enabled**: Enabled.
   * - **Disabled**: Disabled.
   * 
   * @example
   * Disabled
   */
  devTagMarkStatus?: string;
  /**
   * @remarks
   * The sensitive application download audit switch. Valid values:
   * - **Enabled**: Enabled.
   * - **Disabled**: Disabled.
   * 
   * @example
   * Disabled
   */
  downloadAuditStatus?: string;
  /**
   * @remarks
   * The collection of port ranges that are effective for Layer 7 access. This is the intersection of the ports specified in this request and the port ranges already configured for the internal-facing application. An empty collection is returned when Status is set to **Disabled**.
   */
  portRanges?: UpdatePrivateAccessApplicationL7SwitchResponseBodyL7SwitchPortRanges[];
  /**
   * @remarks
   * The source IP mark switch. Valid values:
   * - **Enabled**: Enabled.
   * - **Disabled**: Disabled.
   * 
   * @example
   * Disabled
   */
  srcIpMarkStatus?: string;
  /**
   * @remarks
   * The master switch for Layer 7 access of the internal-facing application. Valid values:
   * - **Enabled**: Enabled.
   * - **Disabled**: Disabled.
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * The request timeout period, in seconds.
   * 
   * @example
   * 60
   */
  timeoutSec?: number;
  /**
   * @remarks
   * The user mark switch. Valid values:
   * - **Enabled**: Enabled.
   * - **Disabled**: Disabled.
   * 
   * @example
   * Enabled
   */
  userMarkStatus?: string;
  /**
   * @remarks
   * The host bypass prevention switch. Valid values:
   * - **Enabled**: Enabled.
   * - **Disabled**: Disabled.
   * 
   * @example
   * Enabled
   */
  zeroTrustStatus?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      devTagMarkStatus: 'DevTagMarkStatus',
      downloadAuditStatus: 'DownloadAuditStatus',
      portRanges: 'PortRanges',
      srcIpMarkStatus: 'SrcIpMarkStatus',
      status: 'Status',
      timeoutSec: 'TimeoutSec',
      userMarkStatus: 'UserMarkStatus',
      zeroTrustStatus: 'ZeroTrustStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      devTagMarkStatus: 'string',
      downloadAuditStatus: 'string',
      portRanges: { 'type': 'array', 'itemType': UpdatePrivateAccessApplicationL7SwitchResponseBodyL7SwitchPortRanges },
      srcIpMarkStatus: 'string',
      status: 'string',
      timeoutSec: 'number',
      userMarkStatus: 'string',
      zeroTrustStatus: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.portRanges)) {
      $dara.Model.validateArray(this.portRanges);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePrivateAccessApplicationL7SwitchResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Layer 7 access switch configuration of the internal-facing application after this update.
   */
  l7Switch?: UpdatePrivateAccessApplicationL7SwitchResponseBodyL7Switch;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BE4FB974-11BC-5453-9BE1-1606A73EACA6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      l7Switch: 'L7Switch',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      l7Switch: UpdatePrivateAccessApplicationL7SwitchResponseBodyL7Switch,
      requestId: 'string',
    };
  }

  validate() {
    if(this.l7Switch && typeof (this.l7Switch as any).validate === 'function') {
      (this.l7Switch as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

