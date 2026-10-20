// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPostPayModuleSwitchShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. Different requests must use different tokens. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-0016e04115b
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run on the request. Valid values:
   * - true: Performs a dry run. The system checks the request but does not perform the actual operation.
   * - false: Performs the request normally.
   * Default value: false.
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The switch configuration of the EDR module.
   */
  edrModuleSwitchShrink?: string;
  /**
   * @remarks
   * Specifies whether to automatically bind new assets to the host and container protection feature. Valid values:
   * 
   * - **0**: disabled
   * - **1**: enabled
   * 
   * @example
   * 1
   */
  postPaidHostAutoBind?: number;
  /**
   * @remarks
   * The edition to which new assets are automatically bound for host and container protection. Valid values:
   * - **1**: Free Edition 
   * - **3**: Enterprise Edition
   * - **5**: Advanced Edition
   * - **6**: Anti-virus Edition    
   * - **7**: Ultimate Edition
   * 
   * @example
   * 3
   */
  postPaidHostAutoBindVersion?: number;
  /**
   * @remarks
   * The pay-as-you-go instance ID. This parameter is required.
   * 
   * > Invoke the [DescribeVersionConfig](~~DescribeVersionConfig~~) operation to obtain the value of this parameter.
   * 
   * @example
   * postpay-sas-**
   */
  postPayInstanceId?: string;
  /**
   * @remarks
   * The switch status of pay-as-you-go modules. The value is a JSON string. Valid values:
   * - Key:
   *   - **VUL**: Vulnerability fixing module
   *   - **CSPM**: Cloud Security Posture Management module
   *   - **AGENTLESS**: Agentless detection module
   *   - **SERVERLESS**: Serverless security module
   *   - **CTDR**: Cloud Threat Detection and Response module
   *   - **POST_HOST**: Host and container security module
   *   - **SDK**: Malicious file detection SDK module
   *   - **RASP**: Application protection module
   *   - **CTDR_STORAGE**: Log management module
   *   - **ANTI_RANSOMWARE**: Anti-ransomware management
   * - Value: 0 indicates disabled. 1 indicates enabled.
   * 
   * > The values of modules that are not specified remain unchanged.
   * 
   * <notice>This parameter has the same meaning as the PostPayModuleSwitchObj parameter. If both parameters are specified, the value of PostPayModuleSwitch takes precedence.</notice>
   * 
   * @example
   * {"VUL":1,"CSPM":0}
   */
  postPayModuleSwitch?: string;
  /**
   * @remarks
   * The switches of pay-as-you-go modules.
   * >Notice:  This parameter has the same meaning as the PostPayModuleSwitch parameter. If both parameters are specified, the value of PostPayModuleSwitch takes precedence.</notice>
   */
  postPayModuleSwitchObjShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
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
      dryRun: 'boolean',
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

