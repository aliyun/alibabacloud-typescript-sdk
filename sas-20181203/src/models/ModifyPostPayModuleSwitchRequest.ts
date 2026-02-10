// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPostPayModuleSwitchRequestPostPayModuleSwitchObj extends $dara.Model {
  /**
   * @remarks
   * Agentless Detection Module. Values:
   * - **0**: Off
   * - **1**: On
   * 
   * @example
   * 1
   */
  agentless?: number;
  /**
   * @example
   * 1
   */
  aiDigital?: number;
  /**
   * @remarks
   * Anti-Ransomware Module. Values:
   * - **0**: Off
   * - **1**: On
   * 
   * @example
   * 1
   */
  antiRansomware?: number;
  /**
   * @remarks
   * Basic service module. Values:
   * - **0**: Off
   * - **1**: On
   * 
   * >Notice: The basic service module switch does not support active modification. When other modules are on, this module is also on. If all other modules are off, then this module is off.
   * 
   * @example
   * 1
   */
  basicService?: number;
  /**
   * @remarks
   * Cloud Security Configuration Check Module. Values:
   * - **0**: Off
   * - **1**: On
   * 
   * @example
   * 1
   */
  cspm?: number;
  /**
   * @remarks
   * Threat Analysis and Response Module. Values:
   * - **0**: Off
   * - **1**: On
   * 
   * @example
   * 1
   */
  ctdr?: number;
  /**
   * @remarks
   * Log Management Module. Values:
   * - **0**: Off
   * - **1**: On
   * 
   * @example
   * 1
   */
  ctdrStorage?: number;
  /**
   * @remarks
   * Host and Container Security Module. Values:
   * - **0**: Off
   * - **1**: On
   * 
   * @example
   * 1
   */
  postHost?: number;
  /**
   * @remarks
   * Application Protection Module. Values:
   * - **0**: Off
   * - **1**: On
   * 
   * @example
   * 1
   */
  rasp?: number;
  /**
   * @remarks
   * Malicious File Detection SDK Module. Values:
   * - **0**: Off
   * - **1**: On
   * 
   * @example
   * 1
   */
  sdk?: number;
  /**
   * @remarks
   * Serverless Security Module. Values:
   * - **0**: Off
   * - **1**: On
   * 
   * @example
   * 1
   */
  serverless?: number;
  /**
   * @remarks
   * Vulnerability Repair Module. Values:
   * - **0**: Off
   * - **1**: On
   * 
   * @example
   * 1
   */
  vul?: number;
  /**
   * @remarks
   * File Tamper Protection Module. Values:
   * - **0**: Off
   * - **1**: On
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

