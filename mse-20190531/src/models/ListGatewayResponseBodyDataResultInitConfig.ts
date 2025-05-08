// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayResponseBodyDataResultInitConfig extends $dara.Model {
  /**
   * @remarks
   * Indicates whether Web Application Firewall (WAF) is enabled.
   * 
   * @example
   * true
   */
  enableWaf?: boolean;
  /**
   * @remarks
   * Indicates whether WAF is supported.
   * 
   * @example
   * true
   */
  supportWaf?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableWaf: 'EnableWaf',
      supportWaf: 'SupportWaf',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableWaf: 'boolean',
      supportWaf: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

