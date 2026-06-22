// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPostPayModuleSwitchRequestPostPayModuleSwitchObj extends $dara.Model {
  /**
   * @remarks
   * The agentless detection module. Valid values:
   * - **0**: Disabled.
   * - **1**: Enabled.
   * 
   * @example
   * 1
   */
  agentless?: number;
  /**
   * @remarks
   * The AI digitalization module.
   * 
   * @example
   * 1
   */
  aiDigital?: number;
  /**
   * @remarks
   * The anti-ransomware module. Valid values:
   * - **0**: Disabled.
   * - **1**: Enabled.
   * 
   * @example
   * 1
   */
  antiRansomware?: number;
  /**
   * @remarks
   * The basic service module. Valid values:
   * - **0**: shutdown.
   * - **1**: enabling status.
   * 
   * >Notice: The basic service module switch cannot be manually modified. This module is in the enabling status when any other module is in the enabling status, and is in the shutdown state only when all other modules are in the shutdown state.
   * 
   * @example
   * 1
   */
  basicService?: number;
  /**
   * @remarks
   * The cloud security configuration check module. Valid values:
   * - **0**: Disabled.
   * - **1**: Enabled.
   * 
   * @example
   * 1
   */
  cspm?: number;
  /**
   * @remarks
   * The threat detection and response module. Valid values:
   * - **0**: Disabled.
   * - **1**: Enabled.
   * 
   * @example
   * 1
   */
  ctdr?: number;
  /**
   * @remarks
   * The log management module. Valid values:
   * - **0**: Disabled.
   * - **1**: Enabled.
   * 
   * @example
   * 1
   */
  ctdrStorage?: number;
  /**
   * @remarks
   * The host and container security module. Valid values:
   * - **0**: Disabled.
   * - **1**: Enabled.
   * 
   * @example
   * 1
   */
  postHost?: number;
  /**
   * @remarks
   * The application protection module. Valid values:
   * - **0**: Disabled.
   * - **1**: Enabled.
   * 
   * @example
   * 1
   */
  rasp?: number;
  /**
   * @remarks
   * The malicious file detection SDK module. Valid values:
   * - **0**: Disabled.
   * - **1**: Enabled.
   * 
   * @example
   * 1
   */
  sdk?: number;
  /**
   * @remarks
   * The serverless security module. Valid values:
   * - **0**: Disabled.
   * - **1**: Enabled.
   * 
   * @example
   * 1
   */
  serverless?: number;
  /**
   * @remarks
   * The vulnerability fix module. Valid values:
   * - **0**: Disabled.
   * - **1**: Enabled.
   * 
   * @example
   * 1
   */
  vul?: number;
  /**
   * @remarks
   * The tamper-proofing module. Valid values:
   * - **0**: Disabled.
   * - **1**: Enabled.
   * 
   * @example
   * 1
   */
  webLock?: number;
  static names(): { [key: string]: string } {
    return {
      agentless: 'Agentless',
      aiDigital: 'AiDigital',
      antiRansomware: 'AntiRansomware',
      basicService: 'BasicService',
      cspm: 'Cspm',
      ctdr: 'Ctdr',
      ctdrStorage: 'CtdrStorage',
      postHost: 'PostHost',
      rasp: 'Rasp',
      sdk: 'Sdk',
      serverless: 'Serverless',
      vul: 'Vul',
      webLock: 'WebLock',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentless: 'number',
      aiDigital: 'number',
      antiRansomware: 'number',
      basicService: 'number',
      cspm: 'number',
      ctdr: 'number',
      ctdrStorage: 'number',
      postHost: 'number',
      rasp: 'number',
      sdk: 'number',
      serverless: 'number',
      vul: 'number',
      webLock: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPostPayModuleSwitchRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically bind newly added assets for host and container protection. Valid values:
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
   * The version to which newly added assets are automatically bound for host and container protection. Valid values:
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
   *   - **VUL**: vulnerability fix module
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
   * <notice>This parameter has the same meaning as PostPayModuleSwitchObj. If both parameters are specified, the value of PostPayModuleSwitch takes precedence..
   * 
   * @example
   * {"VUL":1,"CSPM":0}
   */
  postPayModuleSwitch?: string;
  /**
   * @remarks
   * The pay-as-you-go module switch.
   * >Notice: This parameter has the same meaning as PostPayModuleSwitch. If both parameters are specified, the value of PostPayModuleSwitch takes precedence..
   */
  postPayModuleSwitchObj?: ModifyPostPayModuleSwitchRequestPostPayModuleSwitchObj;
  static names(): { [key: string]: string } {
    return {
      postPaidHostAutoBind: 'PostPaidHostAutoBind',
      postPaidHostAutoBindVersion: 'PostPaidHostAutoBindVersion',
      postPayInstanceId: 'PostPayInstanceId',
      postPayModuleSwitch: 'PostPayModuleSwitch',
      postPayModuleSwitchObj: 'PostPayModuleSwitchObj',
    };
  }

  static types(): { [key: string]: any } {
    return {
      postPaidHostAutoBind: 'number',
      postPaidHostAutoBindVersion: 'number',
      postPayInstanceId: 'string',
      postPayModuleSwitch: 'string',
      postPayModuleSwitchObj: ModifyPostPayModuleSwitchRequestPostPayModuleSwitchObj,
    };
  }

  validate() {
    if(this.postPayModuleSwitchObj && typeof (this.postPayModuleSwitchObj as any).validate === 'function') {
      (this.postPayModuleSwitchObj as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

