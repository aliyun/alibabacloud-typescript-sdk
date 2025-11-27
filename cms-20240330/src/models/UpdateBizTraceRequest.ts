// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateBizTraceRequest extends $dara.Model {
  /**
   * @example
   * {"sample":{"strategy":"BY_APP"}}
   */
  advancedConfig?: string;
  /**
   * @example
   * just test
   */
  bizTraceName?: string;
  /**
   * @example
   * [{"entrancePid":"xxx@d9w3jd9j3","rpcMatcher":{"matchType":"EQUALS","pattern":"/"},"characteristics":{"operation":"OR","rules":[{"target":"CUSTOM_EXTRACT","id":"oi0b3bb7","key":"biz.test","matcher":{"matchType":"CONTAINS","pattern":["1"]}}]}}]
   */
  ruleConfig?: string;
  /**
   * @example
   * default-cms-xxxxxxx-cn-hangzhou
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      advancedConfig: 'advancedConfig',
      bizTraceName: 'bizTraceName',
      ruleConfig: 'ruleConfig',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedConfig: 'string',
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

