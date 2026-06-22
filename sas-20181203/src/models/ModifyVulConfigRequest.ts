// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyVulConfigRequest extends $dara.Model {
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
   * - **cve**: Linux vulnerability
   * - **sys**: Windows vulnerability
   * - **cms**: WebCMS vulnerability
   * - **emg**: emergency vulnerability
   * - **app**: application vulnerability
   * - **yum**: YUM/APT source configuration
   * - **scanMode**: real risk.
   * 
   * @example
   * cve
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

