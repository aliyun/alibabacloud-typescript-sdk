// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWebCcProtectSwitchResponseBodyProtectSwitchList extends $dara.Model {
  /**
   * @remarks
   * The mode of Intelligent Protection. Valid values:
   * 
   * *   **watch**: Warning
   * *   **defense**: Defense
   * 
   * @example
   * defense
   */
  aiMode?: string;
  /**
   * @remarks
   * The status of Intelligent Protection. Valid values:
   * 
   * *   **0**: turned off
   * *   **1:** turned on
   * 
   * @example
   * 1
   */
  aiRuleEnable?: number;
  /**
   * @remarks
   * The level of Intelligent Protection. Valid values:
   * 
   * *   **level30**: Loose
   * *   **level60**: Normal
   * *   **level90**: Strict
   * 
   * @example
   * level60
   */
  aiTemplate?: string;
  /**
   * @remarks
   * The status of Blacklist/Whitelist (Domain Names). Valid values:
   * 
   * *   **0**: turned off
   * *   **1:** turned on
   * 
   * @example
   * 1
   */
  blackWhiteListEnable?: number;
  /**
   * @remarks
   * The status of the Custom Rules switch for Frequency Control. Valid values:
   * 
   * *   **0**: turned off
   * *   **1:** turned on
   * 
   * @example
   * 0
   */
  ccCustomRuleEnable?: number;
  /**
   * @remarks
   * The status of Frequency Control. Valid values:
   * 
   * *   **0**: turned off
   * *   **1:** turned on
   * 
   * @example
   * 1
   */
  ccEnable?: number;
  ccGlobalSwitch?: string;
  /**
   * @remarks
   * The mode of Frequency Control. Valid values:
   * 
   * *   **default**: Normal
   * *   **gf_under_attack**: Emergency
   * *   **gf_sos_verify**: Strict
   * *   **gf_sos_enhance**: Super Strict
   * 
   * @example
   * default
   */
  ccTemplate?: string;
  /**
   * @remarks
   * The domain name of the website.
   * 
   * @example
   * www.aliyun.com
   */
  domain?: string;
  /**
   * @remarks
   * The status of Accurate Access Control. Valid values:
   * 
   * *   **0**: turned off
   * *   **1:** turned on
   * 
   * @example
   * 0
   */
  preciseRuleEnable?: number;
  /**
   * @remarks
   * The status of Location Blacklist (Domain Names). Valid values:
   * 
   * *   **0**: turned off
   * *   **1:** turned on
   * 
   * @example
   * 0
   */
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

export class DescribeWebCcProtectSwitchResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status of each mitigation policy for the website.
   */
  protectSwitchList?: DescribeWebCcProtectSwitchResponseBodyProtectSwitchList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3ADD9EED-CA4B-488C-BC82-01B0B899363D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      protectSwitchList: 'ProtectSwitchList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      protectSwitchList: { 'type': 'array', 'itemType': DescribeWebCcProtectSwitchResponseBodyProtectSwitchList },
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

