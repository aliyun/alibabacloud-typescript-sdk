// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWarningConfigResponseBodyDataWarningConfigInfoChannelsChannel extends $dara.Model {
  /**
   * @example
   * 0
   */
  type?: number;
  /**
   * @example
   * oapi.dingtalk.com/robot/send?access_token=c55628f700eb9ad2a3ca
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWarningConfigResponseBodyDataWarningConfigInfoChannels extends $dara.Model {
  channel?: ListWarningConfigResponseBodyDataWarningConfigInfoChannelsChannel[];
  static names(): { [key: string]: string } {
    return {
      channel: 'Channel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: { 'type': 'array', 'itemType': ListWarningConfigResponseBodyDataWarningConfigInfoChannelsChannel },
    };
  }

  validate() {
    if(Array.isArray(this.channel)) {
      $dara.Model.validateArray(this.channel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWarningConfigResponseBodyDataWarningConfigInfoRidList extends $dara.Model {
  ridList?: string[];
  static names(): { [key: string]: string } {
    return {
      ridList: 'RidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ridList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ridList)) {
      $dara.Model.validateArray(this.ridList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWarningConfigResponseBodyDataWarningConfigInfoRuleListWarningRule extends $dara.Model {
  /**
   * @example
   * 33452
   */
  rid?: number;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      rid: 'Rid',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rid: 'number',
      ruleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWarningConfigResponseBodyDataWarningConfigInfoRuleList extends $dara.Model {
  warningRule?: ListWarningConfigResponseBodyDataWarningConfigInfoRuleListWarningRule[];
  static names(): { [key: string]: string } {
    return {
      warningRule: 'WarningRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      warningRule: { 'type': 'array', 'itemType': ListWarningConfigResponseBodyDataWarningConfigInfoRuleListWarningRule },
    };
  }

  validate() {
    if(Array.isArray(this.warningRule)) {
      $dara.Model.validateArray(this.warningRule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class ListWarningConfigResponseBodyData extends $dara.Model {
  warningConfigInfo?: ListWarningConfigResponseBodyDataWarningConfigInfo[];
  static names(): { [key: string]: string } {
    return {
      warningConfigInfo: 'WarningConfigInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      warningConfigInfo: { 'type': 'array', 'itemType': ListWarningConfigResponseBodyDataWarningConfigInfo },
    };
  }

  validate() {
    if(Array.isArray(this.warningConfigInfo)) {
      $dara.Model.validateArray(this.warningConfigInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWarningConfigResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: ListWarningConfigResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 82C91484-B2D5-4D2A-A21F-A6D73F4D55C6
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListWarningConfigResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

