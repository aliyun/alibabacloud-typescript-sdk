// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyVulConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the vulnerability scan feature. Valid values:
   * 
   * *   **on**: enables the feature
   * *   **off**: disables the feature
   * 
   * > Valid values when you set the Type parameter to scanMode:
   * 
   * *   **real**: displays only easily exploitable vulnerabilities.
   * 
   * *   **all**: displays all vulnerabilities.
   * 
   * @example
   * on
   */
  config?: string;
  /**
   * @remarks
   * The type of the vulnerability. Valid values:
   * 
   * *   **cve**: Linux software vulnerability
   * *   **sys**: Windows system vulnerability
   * *   **cms**: Web-CMS vulnerability
   * *   **emg**: urgent vulnerability
   * *   **app**: application vulnerability
   * *   **yum**: YUM and APT source configuration
   * *   **scanMode**: easily exploitable vulnerability
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

