// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyVulTargetConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable vulnerability detection. Valid values:
   * 
   * *   **on**: yes
   * *   **off**: no
   * 
   * This parameter is required.
   * 
   * @example
   * off
   */
  config?: string;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 1.2.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The type of the vulnerability. Valid values:
   * 
   * *   **cve**: Linux software vulnerability
   * *   **sys**: Windows system vulnerability
   * *   **cms**: Web-CMS vulnerability
   * *   **emg**: urgent vulnerability
   * 
   * This parameter is required.
   * 
   * @example
   * cve
   */
  type?: string;
  /**
   * @remarks
   * The UUID of the server.
   * 
   * This parameter is required.
   * 
   * @example
   * inet-7c676676-06fa-442e-90fb-b802e5d6****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      sourceIp: 'SourceIp',
      type: 'Type',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      sourceIp: 'string',
      type: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

