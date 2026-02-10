// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPostPayModuleSwitchShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Automatic binding switch for new assets in host and container protection. Values:
   * 
   * - **0**: Off
   * - **1**: On
   * 
   * @example
   * 1
   */
  postPaidHostAutoBind?: number;
  /**
   * @remarks
   * Version for automatic binding of new assets in host and container protection. Values:
   * - **1**: Free Edition 
   * - **3**: Enterprise Edition
   * - **5**: Advanced Edition
   * - **6**: Antivirus Edition    
   * - **7**: Flagship Edition
   * 
   * @example
   * 3
   */
  postPaidHostAutoBindVersion?: number;
  /**
   * @remarks
   * Pay-as-you-go instance ID, which must be filled in.
   * 
   * > Call the [DescribeVersionConfig](~~DescribeVersionConfig~~) interface to obtain this parameter.
   * 
   * @example
   * postpay-sas-**
   */
  postPayInstanceId?: string;
  /**
   * @remarks
   * Status of the pay-as-you-go module switch, in JsonString format. Values:
   * - Key:
   *   - **VUL**: Vulnerability Repair Module
   *   - **CSPM**: Cloud Security Posture Management Module
   *   - **AGENTLESS**: Agentless Detection Module
   *   - **SERVERLESS**: Serverless Security Module
   *   - **CTDR**: Threat Analysis and Response Module
   *   - **POST_HOST**: Host and Container Security Module
   *   - **SDK**: Malicious File Detection SDK Module
   *   - **RASP**: Application Protection Module
   *   - **CTDR_STORAGE**: Log Management Module
   *   - **ANTI_RANSOMWARE**: Anti-Ransomware Management
   * - Value: 0 means off, 1 means on
   * 
   * > The values of modules not passed will not change.
   * 
   * <notice>The meaning is the same as the PostPayModuleSwitchObj field. When both exist, the value of PostPayModuleSwitch takes precedence.
   * 
   * @example
   * {"VUL":1,"CSPM":0}
   */
  postPayModuleSwitch?: string;
  /**
   * @remarks
   * Pay-as-you-go module switch.
   * >Notice:  The meaning is the same as the PostPayModuleSwitch field. When both exist, the value of PostPayModuleSwitch takes precedence.
   */
  postPayModuleSwitchObjShrink?: string;
  static names(): { [key: string]: string } {
    return {
      postPaidHostAutoBind: 'PostPaidHostAutoBind',
      postPaidHostAutoBindVersion: 'PostPaidHostAutoBindVersion',
      postPayInstanceId: 'PostPayInstanceId',
      postPayModuleSwitch: 'PostPayModuleSwitch',
      postPayModuleSwitchObjShrink: 'PostPayModuleSwitchObj',
    };
  }

  static types(): { [key: string]: any } {
    return {
      postPaidHostAutoBind: 'number',
      postPaidHostAutoBindVersion: 'number',
      postPayInstanceId: 'string',
      postPayModuleSwitch: 'string',
      postPayModuleSwitchObjShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

