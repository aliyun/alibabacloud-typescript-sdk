// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePrivateAccessApplicationL7SwitchRequestPortRanges extends $dara.Model {
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

export class UpdatePrivateAccessApplicationL7SwitchRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the internal-facing application. Required.
   * 
   * @example
   * pa-application-e12860ef6c48****
   */
  applicationId?: string;
  /**
   * @remarks
   * The device tag mark switch. Required. Valid values:
   * - **Enabled**: Enabled.
   * - **Disabled**: Disabled.
   * 
   * @example
   * Disabled
   */
  devTagMarkStatus?: string;
  /**
   * @remarks
   * The sensitive application download audit switch. Optional. Valid values:
   * - **Enabled**: Enabled.
   * - **Disabled**: Disabled.
   * 
   * @example
   * Disabled
   */
  downloadAuditStatus?: string;
  /**
   * @remarks
   * The collection of port ranges for the internal-facing application. Multiple port ranges cannot be duplicated or overlap. You can specify up to 50 port ranges. This parameter takes effect and is validated only when Status is set to **Enabled**. If this parameter is not specified or an empty collection is passed in, the default ports 80, 443, 8080, and 465 are used. The effective ports are the intersection of the ports specified in this request and the port ranges already configured for the internal-facing application.
   */
  portRanges?: UpdatePrivateAccessApplicationL7SwitchRequestPortRanges[];
  /**
   * @remarks
   * The source IP mark switch. Required. Valid values:
   * - **Enabled**: Enabled.
   * - **Disabled**: Disabled.
   * 
   * @example
   * Disabled
   */
  srcIpMarkStatus?: string;
  /**
   * @remarks
   * The master switch for Layer 7 access of the internal-facing application. Required. Valid values:
   * - **Enabled**: Enabled.
   * - **Disabled**: Disabled.
   * 
   * When the value is **Disabled**, PortRanges is neither validated nor saved.
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * The request timeout period, in seconds. Valid values: 1 to 3600. Default value: 60. If this parameter is not specified or an invalid value is specified, the value 60 is used.
   * 
   * @example
   * 60
   */
  timeoutSec?: number;
  /**
   * @remarks
   * The user mark switch. Required. Valid values:
   * - **Enabled**: Enabled.
   * - **Disabled**: Disabled.
   * 
   * @example
   * Enabled
   */
  userMarkStatus?: string;
  /**
   * @remarks
   * The host bypass prevention switch. Required. Valid values:
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
      portRanges: { 'type': 'array', 'itemType': UpdatePrivateAccessApplicationL7SwitchRequestPortRanges },
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

