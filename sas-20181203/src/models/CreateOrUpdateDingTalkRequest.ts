// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrUpdateDingTalkRequest extends $dara.Model {
  /**
   * @remarks
   * The alerts for which you want the chatbot to send notifications. The value is a JSON array that contains the following fields:
   * 
   * *   **type**: the types of alerts. The valid values are listed in the "Additional description of parameters" section in this topic.
   * 
   * *   **configItemList**: the list of check items. The value is a JSON array that contains the following fields:
   * 
   *     *   **key**: the key of the check item.
   *     *   **valueList**: the values of the check item. The value of valueList is a JSON array.
   * 
   * > For more information about the value of this parameter, see the "Addition description of parameters" section in this topic.
   * 
   * @example
   * [{"type":"sas_analysis_online-sas-operation-log-sas-event-suspicious","configItemList":[{"key":"item_level","valueList":["all"]},{"key":"event_type","valueList":["all"]}]}]
   */
  configList?: string;
  /**
   * @remarks
   * The language of the notifications. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  dingTalkLang?: string;
  /**
   * @remarks
   * The IDs of asset groups for which you want the chatbot to send notifications. The value is a JSON array.
   * 
   * > You can call the [DescribeGroupStruct](~~DescribeGroupStruct~~) operation to query the IDs of asset groups.
   * 
   * @example
   * ["10417151"]
   */
  groupIdList?: string;
  /**
   * @remarks
   * The ID of the chatbot.
   * 
   * > You can call the [DescribeDingTalk](https://www.alibabacloud.com/help/en/security-center/developer-reference/api-sas-2018-12-03-describedingtalk/?spm=a2c63.p38356.0.0.681e4360Qd1eb1) operation to query the IDs of chatbots.
   * 
   * @example
   * 1589
   */
  id?: number;
  /**
   * @remarks
   * The time interval at which the chatbot sends notifications.
   * 
   * > The value **0** indicates unlimited.
   * 
   * @example
   * 0
   */
  intervalTime?: number;
  /**
   * @remarks
   * The name of the chatbot.
   * 
   * > The name of a chatbot must be 2 to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * testNotify
   */
  ruleActionName?: string;
  /**
   * @remarks
   * The webhook URL.
   * 
   * This parameter is required.
   * 
   * @example
   * https://oapi.dingtalk.com/robot/send?access_token=XXX
   */
  sendUrl?: string;
  static names(): { [key: string]: string } {
    return {
      configList: 'ConfigList',
      dingTalkLang: 'DingTalkLang',
      groupIdList: 'GroupIdList',
      id: 'Id',
      intervalTime: 'IntervalTime',
      ruleActionName: 'RuleActionName',
      sendUrl: 'SendUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configList: 'string',
      dingTalkLang: 'string',
      groupIdList: 'string',
      id: 'number',
      intervalTime: 'number',
      ruleActionName: 'string',
      sendUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

