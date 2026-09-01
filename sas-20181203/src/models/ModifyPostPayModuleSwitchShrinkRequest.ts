// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPostPayModuleSwitchShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. Use a different token for each request. Only ASCII characters are supported. The token can be up to 64 characters in length.
   */
  clientToken?: string;
  edrModuleSwitchShrink?: string;
  /**
   * @remarks
   * Specifies whether to automatically bind new assets for host and container protection. Valid values:
   * 
   * - **0**: Disabled.
   * - **1**: Enabled.
   * 
   * @example
   * 1
   */
  postPaidHostAutoBind?: number;
  /**
   * @remarks
   * The edition to which new assets are automatically bound for host and container protection. Valid values:
   * - **1**: Free Edition. 
   * - **3**: Enterprise Edition.
   * - **5**: Advanced Edition.
   * - **6**: Anti-virus Edition.    
   * - **7**: Ultimate Edition.
   * 
   * @example
   * 3
   */
  postPaidHostAutoBindVersion?: number;
  /**
   * @remarks
   * The pay-as-you-go instance ID. This parameter is required.
   * 
   * > Invoke the [DescribeVersionConfig](~~DescribeVersionConfig~~) operation to obtain this parameter.
   * 
   * @example
   * postpay-sas-**
   */
  postPayInstanceId?: string;
  /**
   * @remarks
   * The switch status of pay-as-you-go modules in JSON string format. Valid values:
   * - Key:
   *   - **VUL**: vulnerability management module
   *   - **CSPM**: Cloud Security Posture Management (CSPM) module
   *   - **AGENTLESS**: agentless detection module
   *   - **SERVERLESS**: serverless security module
   *   - **CTDR**: threat detection and response module
   *   - **POST_HOST**: host and container security module
   *   - **SDK**: malicious file detection SDK module
   *   - **RASP**: application protection module
   *   - **CTDR_STORAGE**: log management module
   *   - **ANTI_RANSOMWARE**: anti-ransomware management
   * - Value: 0 indicates disabled. 1 indicates enabled.
   * 
   * > Modules for which no value is specified remain unchanged.
   * 
   * <notice>This parameter has the same meaning as PostPayModuleSwitchObj. If both parameters are specified, the value of PostPayModuleSwitch takes precedence.</notice>
   * 
   * @example
   * {"VUL":1,"CSPM":0}
   */
  postPayModuleSwitch?: string;
  /**
   * @remarks
   * The pay-as-you-go module switch.
   * >Notice: This parameter has the same meaning as PostPayModuleSwitch. If both parameters are specified, the value of PostPayModuleSwitch takes precedence.</notice>
   */
  postPayModuleSwitchObjShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      edrModuleSwitchShrink: 'EdrModuleSwitch',
      postPaidHostAutoBind: 'PostPaidHostAutoBind',
      postPaidHostAutoBindVersion: 'PostPaidHostAutoBindVersion',
      postPayInstanceId: 'PostPayInstanceId',
      postPayModuleSwitch: 'PostPayModuleSwitch',
      postPayModuleSwitchObjShrink: 'PostPayModuleSwitchObj',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      edrModuleSwitchShrink: 'string',
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

