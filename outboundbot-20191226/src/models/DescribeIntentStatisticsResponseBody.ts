// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIntentStatisticsResponseBodyGlobalIntents extends $dara.Model {
  /**
   * @remarks
   * Task group ID
   * 
   * @example
   * 0c3f352f-d045-491d-9ce7-11f2d2b7775d
   */
  groupId?: string;
  /**
   * @remarks
   * Hit after no acknowledgement
   * 
   * @example
   * 1
   */
  hitAfterNoAnswer?: number;
  /**
   * @remarks
   * Hit count
   * 
   * @example
   * 11
   */
  hitNum?: number;
  /**
   * @remarks
   * Instance ID
   * 
   * @example
   * a4274627-265f-4e14-b2d6-4ee7d4f8593e
   */
  instanceId?: string;
  /**
   * @remarks
   * Intent ID
   * 
   * @example
   * 21343425
   */
  intentId?: string;
  /**
   * @remarks
   * Intent name
   * 
   * @example
   * 请假意图
   */
  intentName?: string;
  /**
   * @remarks
   * Type
   * 
   * GlobalIntent(0): Global intent
   * 
   * ProcessIntent(1): Flow intent
   * 
   * @example
   * GlobalIntent
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      hitAfterNoAnswer: 'HitAfterNoAnswer',
      hitNum: 'HitNum',
      instanceId: 'InstanceId',
      intentId: 'IntentId',
      intentName: 'IntentName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      hitAfterNoAnswer: 'number',
      hitNum: 'number',
      instanceId: 'string',
      intentId: 'string',
      intentName: 'string',
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

export class DescribeIntentStatisticsResponseBodyIntentsAfterNoAnswer extends $dara.Model {
  /**
   * @remarks
   * Task group ID
   * 
   * @example
   * b24d321a-2a74-4dd1-a0ba-4ab09cef6652
   */
  groupId?: string;
  /**
   * @remarks
   * No acknowledgement is received after a hit.
   * 
   * @example
   * 1
   */
  hitAfterNoAnswer?: number;
  /**
   * @remarks
   * Instance ID
   * 
   * @example
   * a4274627-265f-4e14-b2d6-4ee7d4f8593e
   */
  instanceId?: string;
  /**
   * @remarks
   * Intent ID
   * 
   * @example
   * 10398032
   */
  intentId?: string;
  /**
   * @remarks
   * Intent name
   * 
   * @example
   * 请假意图
   */
  intentName?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      hitAfterNoAnswer: 'HitAfterNoAnswer',
      instanceId: 'InstanceId',
      intentId: 'IntentId',
      intentName: 'IntentName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      hitAfterNoAnswer: 'number',
      instanceId: 'string',
      intentId: 'string',
      intentName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIntentStatisticsResponseBodyProcessIntents extends $dara.Model {
  /**
   * @remarks
   * Task group ID
   * 
   * @example
   * 0c3f352f-d045-491d-9ce7-11f2d2b7775d
   */
  groupId?: string;
  /**
   * @remarks
   * Hit after no acknowledgement
   * 
   * @example
   * 1
   */
  hitAfterNoAnswer?: number;
  /**
   * @remarks
   * Hit count
   * 
   * @example
   * 10
   */
  hitNum?: number;
  /**
   * @remarks
   * Instance ID
   * 
   * @example
   * a4274627-265f-4e14-b2d6-4ee7d4f8593e
   */
  instanceId?: string;
  /**
   * @remarks
   * Intent ID
   * 
   * @example
   * 12343
   */
  intentId?: string;
  /**
   * @remarks
   * Intent name
   * 
   * @example
   * 请假意图
   */
  intentName?: string;
  /**
   * @remarks
   * Percentage
   * 
   * @example
   * 33.33%
   */
  rateDisplay?: string;
  /**
   * @remarks
   * Type
   * 
   * - GlobalIntent(0): Global intent
   * 
   * - ProcessIntent(1): Flow intent
   * 
   * @example
   * ProcessIntent
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      hitAfterNoAnswer: 'HitAfterNoAnswer',
      hitNum: 'HitNum',
      instanceId: 'InstanceId',
      intentId: 'IntentId',
      intentName: 'IntentName',
      rateDisplay: 'RateDisplay',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      hitAfterNoAnswer: 'number',
      hitNum: 'number',
      instanceId: 'string',
      intentId: 'string',
      intentName: 'string',
      rateDisplay: 'string',
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

export class DescribeIntentStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * API status code
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Total count of global intents
   * 
   * @example
   * 100
   */
  globalIntentNum?: number;
  /**
   * @remarks
   * Global intent array
   * 
   * @example
   * []
   */
  globalIntents?: DescribeIntentStatisticsResponseBodyGlobalIntents[];
  /**
   * @remarks
   * Group ID of the instance.
   * 
   * @example
   * 0c3f352f-d045-491d-9ce7-11f2d2b7775d
   */
  groupId?: string;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Instance ID
   * 
   * @example
   * a4274627-265f-4e14-b2d6-4ee7d4f8593e
   */
  instanceId?: string;
  /**
   * @remarks
   * Rejected intent information list
   */
  intentsAfterNoAnswer?: DescribeIntentStatisticsResponseBodyIntentsAfterNoAnswer[];
  /**
   * @remarks
   * API message
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * Total count of flow intents
   * 
   * @example
   * 123
   */
  processIntentNum?: number;
  /**
   * @remarks
   * Intent information list
   * 
   * @example
   * []
   */
  processIntents?: DescribeIntentStatisticsResponseBodyProcessIntents[];
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @remarks
   * Success
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      globalIntentNum: 'GlobalIntentNum',
      globalIntents: 'GlobalIntents',
      groupId: 'GroupId',
      httpStatusCode: 'HttpStatusCode',
      instanceId: 'InstanceId',
      intentsAfterNoAnswer: 'IntentsAfterNoAnswer',
      message: 'Message',
      processIntentNum: 'ProcessIntentNum',
      processIntents: 'ProcessIntents',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      globalIntentNum: 'number',
      globalIntents: { 'type': 'array', 'itemType': DescribeIntentStatisticsResponseBodyGlobalIntents },
      groupId: 'string',
      httpStatusCode: 'number',
      instanceId: 'string',
      intentsAfterNoAnswer: { 'type': 'array', 'itemType': DescribeIntentStatisticsResponseBodyIntentsAfterNoAnswer },
      message: 'string',
      processIntentNum: 'number',
      processIntents: { 'type': 'array', 'itemType': DescribeIntentStatisticsResponseBodyProcessIntents },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.globalIntents)) {
      $dara.Model.validateArray(this.globalIntents);
    }
    if(Array.isArray(this.intentsAfterNoAnswer)) {
      $dara.Model.validateArray(this.intentsAfterNoAnswer);
    }
    if(Array.isArray(this.processIntents)) {
      $dara.Model.validateArray(this.processIntents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

