// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValidateEmailRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to check the graylist. Default value: false. Results will be sent as asynchronous notifications through EventBridge.
   * 
   * @example
   * true
   */
  checkGraylist?: boolean;
  /**
   * @remarks
   * The email address to validate
   * 
   * This parameter is required.
   * 
   * @example
   * xxx@yyy.com
   */
  email?: string;
  /**
   * @remarks
   * The detection type:
   * 
   * - FULL: Enables all detection capabilities, including SMTP probing. Since SMTP probing involves remote connections, the overall latency is higher. This is suitable for scenarios that are not sensitive to response time. Each detection consumes 1 address validation quota.
   * - BASIC_ONLY: Enables all detection capabilities except SMTP probing, with low latency. This is suitable for scenarios sensitive to response time, such as real-time validation during registration to check whether an email address is a disposable email or an abnormal address such as MX forwarding, to defend against mass registration by malicious actors. Each detection consumes 1/3 of an address validation quota.
   * 
   * @example
   * FULL
   */
  probeType?: string;
  /**
   * @remarks
   * Timeout period. Default value: 60 seconds.
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

