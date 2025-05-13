// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BizTraceConfig extends $dara.Model {
  advancedConfig?: string;
  bizTraceCode?: string;
  bizTraceId?: string;
  bizTraceName?: string;
  createTime?: string;
  regionId?: string;
  ruleConfig?: string;
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

