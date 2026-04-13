// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDetectConfigsResponseBodyDetectConfigsAlarmConfigs extends $dara.Model {
  /**
   * @example
   * https://metrichub-cms-cn-hangzhou.aliyuncs.com/event/notify?xxxxx
   */
  address?: string;
  /**
   * @example
   * cms
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'address',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDetectConfigsResponseBodyDetectConfigs extends $dara.Model {
  alarmConfigs?: ListDetectConfigsResponseBodyDetectConfigsAlarmConfigs[];
  /**
   * @example
   * 2026-04-10T02:30:04Z
   */
  createTime?: string;
  /**
   * @example
   * 0 0 0 ? * 1
   */
  cronExpression?: string;
  /**
   * @example
   * this is a description
   */
  description?: string;
  /**
   * @example
   * dc-xxxx
   */
  detectConfigId?: string;
  /**
   * @example
   * test
   */
  detectConfigName?: string;
  /**
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @example
   * Cron
   */
  triggerType?: string;
  static names(): { [key: string]: string } {
    return {
      alarmConfigs: 'alarmConfigs',
      createTime: 'createTime',
      cronExpression: 'cronExpression',
      description: 'description',
      detectConfigId: 'detectConfigId',
      detectConfigName: 'detectConfigName',
      enabled: 'enabled',
      triggerType: 'triggerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmConfigs: { 'type': 'array', 'itemType': ListDetectConfigsResponseBodyDetectConfigsAlarmConfigs },
      createTime: 'string',
      cronExpression: 'string',
      description: 'string',
      detectConfigId: 'string',
      detectConfigName: 'string',
      enabled: 'boolean',
      triggerType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.alarmConfigs)) {
      $dara.Model.validateArray(this.alarmConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDetectConfigsResponseBody extends $dara.Model {
  detectConfigs?: ListDetectConfigsResponseBodyDetectConfigs[];
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * 30BaZ9ekYWXJdqshYecA++coNg7qT1Zbm3RfLyFIZeY=
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 79284133-D4BA-56B3-954C-D538256F7EAA
   */
  requestId?: string;
  /**
   * @example
   * 82
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      detectConfigs: 'detectConfigs',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detectConfigs: { 'type': 'array', 'itemType': ListDetectConfigsResponseBodyDetectConfigs },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.detectConfigs)) {
      $dara.Model.validateArray(this.detectConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

