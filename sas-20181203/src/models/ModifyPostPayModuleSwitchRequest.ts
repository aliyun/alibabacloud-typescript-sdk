// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPostPayModuleSwitchRequestEdrModuleSwitch extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic binding of new assets to the EDR module. A value of 0 indicates that the feature is disabled. A value of 1 indicates that the feature is enabled.
   */
  autoBind?: number;
  /**
   * @remarks
   * The authorized quota for EDR hosts.
   */
  EDR_HOST_USAGE?: number;
  static names(): { [key: string]: string } {
    return {
      autoBind: 'AutoBind',
      EDR_HOST_USAGE: 'EDR_HOST_USAGE',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoBind: 'number',
      EDR_HOST_USAGE: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPostPayModuleSwitchRequestPostPayModuleSwitchObj extends $dara.Model {
  /**
   * @remarks
   * The agentless detection module. Valid values:
   * - **0**: disabled
   * - **1**: enabled
   * 
   * @example
   * 1
   */
  agentless?: number;
  /**
   * @remarks
   * The AI digitalization feature.
   * 
   * @example
   * 1
   */
  aiDigital?: number;
  /**
   * @remarks
   * The anti-ransomware module. Valid values:
   * - **0**: disabled
   * - **1**: enabled
   * 
   * @example
   * 1
   */
  antiRansomware?: number;
  /**
   * @remarks
   * The basic service module. Valid values:
   * - **0**: disabled
   * - **1**: enabled
   * 
   * >Notice: You cannot manually change the switch of the basic service module. If any other module is enabled, the enabling status of this module is enabled. If all other modules are shutdown, this module is not in the shutdown state.</notice>
   * 
   * @example
   * 1
   */
  basicService?: number;
  /**
   * @remarks
   * The Cloud Security Posture Management (CSPM) module. Valid values:
   * - **0**: disabled
   * - **1**: enabled
   * 
   * @example
   * 1
   */
  cspm?: number;
  /**
   * @remarks
   * The Cloud Threat Detection and Response (CTDR) module. Valid values:
   * - **0**: disabled
   * - **1**: enabled
   * 
   * @example
   * 1
   */
  ctdr?: number;
  /**
   * @remarks
   * The log management module. Valid values:
   * - **0**: disabled
   * - **1**: enabled
   * 
   * @example
   * 1
   */
  ctdrStorage?: number;
  /**
   * @remarks
   * The host and container security module. Valid values:
   * - **0**: disabled
   * - **1**: enabled
   * 
   * @example
   * 1
   */
  postHost?: number;
  /**
   * @remarks
   * The application protection module. Valid values:
   * - **0**: disabled
   * - **1**: enabled
   * 
   * @example
   * 1
   */
  rasp?: number;
  /**
   * @remarks
   * The malicious file detection SDK module. Valid values:
   * - **0**: disabled
   * - **1**: enabled
   * 
   * @example
   * 1
   */
  sdk?: number;
  /**
   * @remarks
   * The Serverless security module. Valid values:
   * - **0**: disabled
   * - **1**: enabled
   * 
   * @example
   * 1
   */
  serverless?: number;
  /**
   * @remarks
   * The vulnerability fixing module. Valid values:
   * - **0**: disabled
   * - **1**: enabled
   * 
   * @example
   * 1
   */
  vul?: number;
  /**
   * @remarks
   * The file tamper-proofing module. Valid values:
   * - **0**: disabled
   * - **1**: enabled
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
  edrModuleSwitch?: ModifyPostPayModuleSwitchRequestEdrModuleSwitch;
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
  postPayModuleSwitchObj?: ModifyPostPayModuleSwitchRequestPostPayModuleSwitchObj;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      edrModuleSwitch: 'EdrModuleSwitch',
      postPaidHostAutoBind: 'PostPaidHostAutoBind',
      postPaidHostAutoBindVersion: 'PostPaidHostAutoBindVersion',
      postPayInstanceId: 'PostPayInstanceId',
      postPayModuleSwitch: 'PostPayModuleSwitch',
      postPayModuleSwitchObj: 'PostPayModuleSwitchObj',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      edrModuleSwitch: ModifyPostPayModuleSwitchRequestEdrModuleSwitch,
      postPaidHostAutoBind: 'number',
      postPaidHostAutoBindVersion: 'number',
      postPayInstanceId: 'string',
      postPayModuleSwitch: 'string',
      postPayModuleSwitchObj: ModifyPostPayModuleSwitchRequestPostPayModuleSwitchObj,
    };
  }

  validate() {
    if(this.edrModuleSwitch && typeof (this.edrModuleSwitch as any).validate === 'function') {
      (this.edrModuleSwitch as any).validate();
    }
    if(this.postPayModuleSwitchObj && typeof (this.postPayModuleSwitchObj as any).validate === 'function') {
      (this.postPayModuleSwitchObj as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

