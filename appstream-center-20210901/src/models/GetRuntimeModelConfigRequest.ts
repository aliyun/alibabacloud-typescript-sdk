// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRuntimeModelConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The agent platform.
   * 
   * @example
   * ENTERPRISE
   */
  agentPlatform?: string;
  /**
   * @remarks
   * The agent provider.
   * 
   * This parameter is required.
   * 
   * @example
   * OpenClaw
   */
  agentProvider?: string;
  /**
   * @remarks
   * Specifies whether to include risk information.
   * 
   * @example
   * true
   */
  includeRiskInfo?: boolean;
  /**
   * @remarks
   * The model display language. Valid values: zh-CN, en-US, ja-JP, and zh-TW. The value is case-insensitive, and leading and trailing spaces are removed. If this parameter is not specified, left empty, or set to an unsupported value, the default value zh-CN is used. The model pool description mapping is returned based on the normalized interface language, and falls back to Chinese if a translation is missing. Bailian and existing dynamic configurations still use Chinese for zh-CN and zh-TW, and English for en-US and ja-JP. This parameter is used for the names and descriptions of system intelligence tiers, as well as general model descriptions. Template fallback text, custom names, and runtime configurations retain their original values. The values zh_CN, en_US, ja_JP, and zh_TW are also supported, and en and ja are compatible. The value is case-insensitive, and leading and trailing spaces are removed. An invalid language value falls back to Chinese and does not cause a parameter error to be returned for Language. The names and descriptions of the four system intelligence tiers (Auto, Standard, Advanced, and Ultimate) support all four languages, and Chinese is retained for missing Japanese and Traditional Chinese items. User template names retain their original values.
   * 
   * @example
   * en_US
   */
  language?: string;
  /**
   * @remarks
   * The agent runtime ID. The ID mappings are as follows:
   * 
   * JVS Computer: JVS Computer ID, in the format of jvs-xxxx.
   * 
   * OpenClaw: Cloud desktop ID, in the format of ecd-xxxx.
   * 
   * Hermes Agent: Hermes Agent ID, in the format of jvs-xxxx.
   * 
   * This parameter is required.
   * 
   * @example
   * ecd-xxxx
   */
  runtimeId?: string;
  /**
   * @remarks
   * The agent runtime type.
   * 
   * This parameter is required.
   * 
   * @example
   * CloudDesktop
   */
  runtimeType?: string;
  /**
   * @remarks
   * The smart model filter. Valid values:
   * - true: Queries the system wuying-preset provider models based on the business type of the runtime.
   * - false: Excludes wuying-preset from the effective configuration.
   * - Not specified: Returns both smart and non-smart models in the effective configuration.
   * The business type is read by the server from runtime.biz_type, and the BizType input parameter is not required. Risk information is still independently controlled by IncludeRiskInfo.
   * 
   * @example
   * true
   */
  smartModel?: boolean;
  static names(): { [key: string]: string } {
    return {
      agentPlatform: 'AgentPlatform',
      agentProvider: 'AgentProvider',
      includeRiskInfo: 'IncludeRiskInfo',
      language: 'Language',
      runtimeId: 'RuntimeId',
      runtimeType: 'RuntimeType',
      smartModel: 'SmartModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentPlatform: 'string',
      agentProvider: 'string',
      includeRiskInfo: 'boolean',
      language: 'string',
      runtimeId: 'string',
      runtimeType: 'string',
      smartModel: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

