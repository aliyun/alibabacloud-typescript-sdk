// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainCcProtectSwitchResponseBodyProtectSwitchList extends $dara.Model {
  aiMode?: string;
  aiRuleEnable?: number;
  aiTemplate?: string;
  blackWhiteListEnable?: number;
  ccCustomRuleEnable?: number;
  ccEnable?: number;
  ccGlobalSwitch?: string;
  ccTemplate?: string;
  domain?: string;
  preciseRuleEnable?: number;
  regionBlockEnable?: number;
  static names(): { [key: string]: string } {
    return {
      aiMode: 'AiMode',
      aiRuleEnable: 'AiRuleEnable',
      aiTemplate: 'AiTemplate',
      blackWhiteListEnable: 'BlackWhiteListEnable',
      ccCustomRuleEnable: 'CcCustomRuleEnable',
      ccEnable: 'CcEnable',
      ccGlobalSwitch: 'CcGlobalSwitch',
      ccTemplate: 'CcTemplate',
      domain: 'Domain',
      preciseRuleEnable: 'PreciseRuleEnable',
      regionBlockEnable: 'RegionBlockEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiMode: 'string',
      aiRuleEnable: 'number',
      aiTemplate: 'string',
      blackWhiteListEnable: 'number',
      ccCustomRuleEnable: 'number',
      ccEnable: 'number',
      ccGlobalSwitch: 'string',
      ccTemplate: 'string',
      domain: 'string',
      preciseRuleEnable: 'number',
      regionBlockEnable: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainCcProtectSwitchResponseBody extends $dara.Model {
  protectSwitchList?: DescribeDomainCcProtectSwitchResponseBodyProtectSwitchList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      protectSwitchList: 'ProtectSwitchList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      protectSwitchList: { 'type': 'array', 'itemType': DescribeDomainCcProtectSwitchResponseBodyProtectSwitchList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.protectSwitchList)) {
      $dara.Model.validateArray(this.protectSwitchList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

