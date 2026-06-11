// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BizTraceConfig extends $dara.Model {
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
   * The business trace identifier.
   * 
   * @example
   * label_env
   */
  bizTraceCode?: string;
  /**
   * @remarks
   * The business trace ID.
   * 
   * @example
   * e339260ed64c95d
   */
  bizTraceId?: string;
  /**
   * @remarks
   * The business trace name.
   * 
   * @example
   * just test
   */
  bizTraceName?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-12-12 00:00:00
   */
  createTime?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The list of configuration rules.
   * 
   * @example
   * [{"entrancePid":"xxxxx@b57c44xx6e86","rpcMatcher":{"matchType":"EQUALS","pattern":"/createApp"},"characteristics":{"operation":"AND","rules":[{"target":"CUSTOM_EXTRACT","matcher":{"matchType":"CONTAINS","pattern":[]}}]}}]
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
      bizTraceId: 'bizTraceId',
      bizTraceName: 'bizTraceName',
      createTime: 'createTime',
      regionId: 'regionId',
      ruleConfig: 'ruleConfig',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedConfig: 'string',
      bizTraceCode: 'string',
      bizTraceId: 'string',
      bizTraceName: 'string',
      createTime: 'string',
      regionId: 'string',
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

