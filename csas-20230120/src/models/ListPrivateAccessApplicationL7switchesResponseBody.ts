// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPrivateAccessApplicationL7SwitchesResponseBodyL7SwitchesPortRanges extends $dara.Model {
  /**
   * @remarks
   * The start port.
   * 
   * @example
   * 2379
   */
  begin?: number;
  /**
   * @remarks
   * The end port. The value must be greater than or equal to the start port.
   * 
   * @example
   * 24
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

export class ListPrivateAccessApplicationL7SwitchesResponseBodyL7Switches extends $dara.Model {
  /**
   * @remarks
   * The ID of the internal-facing application.
   * 
   * @example
   * pa-application-bbbc550d7c6e4db6
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
   * The download audit switch for sensitive applications. Valid values:
   * - **Enabled**: Enabled.
   * - **Disabled**: Disabled.
   * 
   * @example
   * Disabled
   */
  downloadAuditStatus?: string;
  /**
   * @remarks
   * The port ranges.
   */
  portRanges?: ListPrivateAccessApplicationL7SwitchesResponseBodyL7SwitchesPortRanges[];
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
   * The status of the internal-facing access policy. Valid values:
   * - **Enabled**: Enabled.
   * - **Disabled**: Disabled.
   * 
   * @example
   * Disabled
   */
  status?: string;
  /**
   * @remarks
   * The request timeout period.
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
   * Disabled
   */
  userMarkStatus?: string;
  /**
   * @remarks
   * The host bypass prevention switch. Valid values:
   * - **Enabled**: Enabled.
   * - **Disabled**: Disabled.
   * 
   * @example
   * Disabled
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
      portRanges: { 'type': 'array', 'itemType': ListPrivateAccessApplicationL7SwitchesResponseBodyL7SwitchesPortRanges },
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

export class ListPrivateAccessApplicationL7SwitchesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Layer 7 application configurations.
   */
  l7Switches?: ListPrivateAccessApplicationL7SwitchesResponseBodyL7Switches[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * ED459CAD-8D3F-51B8-AEA5-CAABC0325022
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      l7Switches: 'L7Switches',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      l7Switches: { 'type': 'array', 'itemType': ListPrivateAccessApplicationL7SwitchesResponseBodyL7Switches },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.l7Switches)) {
      $dara.Model.validateArray(this.l7Switches);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

