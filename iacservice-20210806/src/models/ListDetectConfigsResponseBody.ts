// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDetectConfigsResponseBodyDetectConfigsAlarmConfigs extends $dara.Model {
  /**
   * @remarks
   * Alerting address.
   * 
   * @example
   * https://metrichub-cms-cn-hangzhou.aliyuncs.com/event/notify?xxxxx
   */
  address?: string;
  /**
   * @remarks
   * Alerting method. Currently only `cms` is supported.
   * 
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
  /**
   * @remarks
   * List of alerting addresses
   */
  alarmConfigs?: ListDetectConfigsResponseBodyDetectConfigsAlarmConfigs[];
  /**
   * @remarks
   * Creation Time.
   * 
   * @example
   * 2026-04-10T02:30:04Z
   */
  createTime?: string;
  /**
   * @remarks
   * Cron expression (UTC+8). Required when the trigger type is Cron.
   * 
   * @example
   * 0 0 0 ? * 1
   */
  cronExpression?: string;
  /**
   * @remarks
   * Description.
   * 
   * @example
   * this is a description
   */
  description?: string;
  /**
   * @remarks
   * Drift detection configuration ID
   * 
   * @example
   * dc-xxxx
   */
  detectConfigId?: string;
  /**
   * @remarks
   * Name of the drift detection configuration.
   * 
   * @example
   * test
   */
  detectConfigName?: string;
  /**
   * @remarks
   * Whether drift detection is enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * Trigger type  
   * 
   * - Manual: Execute manually  
   * - Cron: Trigger on schedule
   * 
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
  /**
   * @remarks
   * List of drift detection configurations
   */
  detectConfigs?: ListDetectConfigsResponseBodyDetectConfigs[];
  /**
   * @remarks
   * Maximum number of records to retrieve in a single request.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * Paging nextToken.
   * 
   * @example
   * 30BaZ9ekYWXJdqshYecA++coNg7qT1Zbm3RfLyFIZeY=
   */
  nextToken?: string;
  /**
   * @remarks
   * ID of the request.
   * 
   * @example
   * 79284133-D4BA-56B3-954C-D538256F7EAA
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of records.
   * 
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

