// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyVulConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. Different requests should use different tokens. The token supports only ASCII characters and cannot exceed 64 characters in length.
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to enable or disable vulnerability detection. Valid values:
   * 
   * - **on**: Enable vulnerability detection.
   * - **off**: Disable vulnerability detection.
   * 
   * > If the type is set to real risk, valid values:
   * > - **real**: Real risk vulnerabilities.
   * > - **all**: All vulnerabilities.
   * 
   * @example
   * on
   */
  config?: string;
  /**
   * @remarks
   * The type of vulnerability to modify. Valid values:
   * 
   * - **cve**: Linux software vulnerability
   * - **sys**: Windows system vulnerability
   * - **cms**: Web-CMS vulnerability
   * - **emg**: emergency vulnerability
   * - **app**: application vulnerability
   * - **yum**: YUM/APT source configuration
   * - **scanMode**: real risk
   * 
   * @example
   * cve
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      config: 'Config',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      config: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

