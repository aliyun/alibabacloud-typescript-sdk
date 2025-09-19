// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyVulTargetRequest extends $dara.Model {
  /**
   * @remarks
   * The configurations. The value of this parameter is in the JSON format and contains the following fields:
   * 
   * *   **vulType**: the type of the vulnerabilities to scan. Valid values:
   * 
   *     *   **cve**: Linux software vulnerabilities
   *     *   **sys**: Windows system vulnerabilities
   *     *   **cms**: Web-CMS vulnerabilities
   *     *   **emg**: urgent vulnerabilities
   * 
   * @example
   * {\\"vulType\\":\\"sys\\"}
   */
  config?: string;
  /**
   * @remarks
   * The operation. The value of this parameter is in the JSON format and contains the following fields:
   * 
   * *   **target**: the UUID of the server.
   * 
   * *   **targetType**: the application scope of the operation. Set the value to uuid.
   * 
   * *   **flag**: the type of the operation. Valid values:
   * 
   *     *   **add**: select
   *     *   **del**: deselect
   * 
   * @example
   * [{\\"target\\": \\"9cd5c684-7201-4de5-ad2c-cea89a5e****\\", \\"targetType\\": \\"uuid\\", \\"flag\\": \\"add\\"}]
   */
  target?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      target: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

