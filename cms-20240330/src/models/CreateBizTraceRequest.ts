// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBizTraceRequest extends $dara.Model {
  /**
   * @remarks
   * The advanced configuration.
   * 
   * @example
   * {"sample":{"strategy":"BY_APP"}}
   */
  advancedConfig?: string;
  /**
   * @remarks
   * The identifier for the business trace. It can contain only letters, digits, and underscores (_). The first character must be a lowercase letter.
   * 
   * @example
   * label_env
   */
  bizTraceCode?: string;
  /**
   * @remarks
   * The name of the business trace.
   * 
   * @example
   * just test
   */
  bizTraceName?: string;
  /**
   * @remarks
   * The configuration rules.
   * 
   * @example
   * [{"entrancePid":"xxx@d9w3jd9j3","rpcMatcher":{"matchType":"EQUALS","pattern":"/"},"characteristics":{"operation":"OR","rules":[{"target":"CUSTOM_EXTRACT","id":"oi0b3bb7","key":"biz.test","matcher":{"matchType":"CONTAINS","pattern":["1"]}}]}}]
   */
  ruleConfig?: string;
  /**
   * @remarks
   * The workspace.
   * 
   * @example
   * default-cms-xxxxxxx-cn-hangzhou
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      advancedConfig: 'advancedConfig',
      bizTraceCode: 'bizTraceCode',
      bizTraceName: 'bizTraceName',
      ruleConfig: 'ruleConfig',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedConfig: 'string',
      bizTraceCode: 'string',
      bizTraceName: 'string',
      ruleConfig: 'string',
      workspace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

