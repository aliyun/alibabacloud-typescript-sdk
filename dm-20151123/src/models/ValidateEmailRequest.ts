// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValidateEmailRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to check the graylist. Default value: false. The result is asynchronously notified through EventBridge.
   * 
   * @example
   * true
   */
  checkGraylist?: boolean;
  /**
   * @remarks
   * The email address to validate.
   * 
   * This parameter is required.
   * 
   * @example
   * xxx@yyy.com
   */
  email?: string;
  /**
   * @remarks
   * The probe type. Valid values:
   * 
   * - FULL: enables all detection capabilities, including SMTP probing. Because SMTP probing involves remote connections, the overall latency is high. This mode is suitable for scenarios that are not sensitive to response time. Each detection consumes 1 address validation quota. In this mode, the UNKNOWN status is not metered.
   * - BASIC_ONLY: enables all detection capabilities except SMTP probing, with low latency. This mode is suitable for scenarios that are sensitive to response time, such as real-time validation during registration to check whether an email address is a disposable mailbox or an abnormal address with MX forwarding, to prevent batch registration by the cyber underground economy chain. Each detection consumes 1/3 of an address validation quota. In this mode, the UNKNOWN status is metered.
   * 
   * @example
   * FULL
   */
  probeType?: string;
  /**
   * @remarks
   * The timeout period. Default value: 60 seconds.
   * 
   * @example
   * 20
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      checkGraylist: 'CheckGraylist',
      email: 'Email',
      probeType: 'ProbeType',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkGraylist: 'boolean',
      email: 'string',
      probeType: 'string',
      timeout: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

