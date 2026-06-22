// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyVulTargetRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration target. This parameter is in JSON format and contains the following fields:
   * 
   * - **vulType**: The vulnerability type. Valid values:
   *      - **cve**: Linux software vulnerability.
   *     - **sys**: Windows system vulnerability.
   *     - **cms**: Web-CMS vulnerability.
   *     - **emg**: Emergency vulnerability.
   * 
   * @example
   * {\\"vulType\\":\\"sys\\"}
   */
  config?: string;
  /**
   * @remarks
   * The operation target. This parameter is in JSON format and contains the following fields:
   * 
   * - **target**: The UUID of the target machine.
   * - **targetType**: The target type. Fixed value: uuid.
   * - **flag**: The flag. Valid values:
   *     - **add**: Selected.
   *     - **del**: Deselected.
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

