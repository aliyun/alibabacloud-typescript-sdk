// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListWarningConfigResponseBodyDataWarningConfigInfoChannels } from "./ListWarningConfigResponseBodyDataWarningConfigInfoChannels";
import { ListWarningConfigResponseBodyDataWarningConfigInfoRidList } from "./ListWarningConfigResponseBodyDataWarningConfigInfoRidList";
import { ListWarningConfigResponseBodyDataWarningConfigInfoRuleList } from "./ListWarningConfigResponseBodyDataWarningConfigInfoRuleList";


export class ListWarningConfigResponseBodyDataWarningConfigInfo extends $dara.Model {
  channels?: ListWarningConfigResponseBodyDataWarningConfigInfoChannels;
  /**
   * @example
   * 32
   */
  configId?: number;
  configName?: string;
  /**
   * @example
   * 2019-10-29T15:30Z
   */
  createTime?: string;
  ridList?: ListWarningConfigResponseBodyDataWarningConfigInfoRidList;
  ruleList?: ListWarningConfigResponseBodyDataWarningConfigInfoRuleList;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 2019-10-29T17:24Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      channels: 'Channels',
      configId: 'ConfigId',
      configName: 'ConfigName',
      createTime: 'CreateTime',
      ridList: 'RidList',
      ruleList: 'RuleList',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channels: ListWarningConfigResponseBodyDataWarningConfigInfoChannels,
      configId: 'number',
      configName: 'string',
      createTime: 'string',
      ridList: ListWarningConfigResponseBodyDataWarningConfigInfoRidList,
      ruleList: ListWarningConfigResponseBodyDataWarningConfigInfoRuleList,
      status: 'number',
      updateTime: 'string',
    };
  }

  validate() {
    if(this.channels && typeof (this.channels as any).validate === 'function') {
      (this.channels as any).validate();
    }
    if(this.ridList && typeof (this.ridList as any).validate === 'function') {
      (this.ridList as any).validate();
    }
    if(this.ruleList && typeof (this.ruleList as any).validate === 'function') {
      (this.ruleList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

