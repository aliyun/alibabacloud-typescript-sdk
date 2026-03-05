// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUnionTaskShrinkRequest extends $dara.Model {
  anchorId?: string;
  brandUserId?: number;
  brandUserNick?: string;
  channel?: string;
  channelId?: string;
  chargePloy?: number;
  chargeType?: number;
  clientToken?: string;
  contentId?: number;
  contentUrl?: string;
  customCreativeType?: string;
  endTime?: string;
  industryLabelBagId?: number;
  mediaIdBlackListShrink?: string;
  mediaIdWhiteListShrink?: string;
  mediaIndustry?: string;
  name?: string;
  optimizationSwitch?: number;
  proxyUserId?: number;
  quota?: number;
  quotaDay?: number;
  startTime?: string;
  taskBizType?: string;
  taskRuleType?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      anchorId: 'AnchorId',
      brandUserId: 'BrandUserId',
      brandUserNick: 'BrandUserNick',
      channel: 'Channel',
      channelId: 'ChannelId',
      chargePloy: 'ChargePloy',
      chargeType: 'ChargeType',
      clientToken: 'ClientToken',
      contentId: 'ContentId',
      contentUrl: 'ContentUrl',
      customCreativeType: 'CustomCreativeType',
      endTime: 'EndTime',
      industryLabelBagId: 'IndustryLabelBagId',
      mediaIdBlackListShrink: 'MediaIdBlackList',
      mediaIdWhiteListShrink: 'MediaIdWhiteList',
      mediaIndustry: 'MediaIndustry',
      name: 'Name',
      optimizationSwitch: 'OptimizationSwitch',
      proxyUserId: 'ProxyUserId',
      quota: 'Quota',
      quotaDay: 'QuotaDay',
      startTime: 'StartTime',
      taskBizType: 'TaskBizType',
      taskRuleType: 'TaskRuleType',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anchorId: 'string',
      brandUserId: 'number',
      brandUserNick: 'string',
      channel: 'string',
      channelId: 'string',
      chargePloy: 'number',
      chargeType: 'number',
      clientToken: 'string',
      contentId: 'number',
      contentUrl: 'string',
      customCreativeType: 'string',
      endTime: 'string',
      industryLabelBagId: 'number',
      mediaIdBlackListShrink: 'string',
      mediaIdWhiteListShrink: 'string',
      mediaIndustry: 'string',
      name: 'string',
      optimizationSwitch: 'number',
      proxyUserId: 'number',
      quota: 'number',
      quotaDay: 'number',
      startTime: 'string',
      taskBizType: 'string',
      taskRuleType: 'string',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

