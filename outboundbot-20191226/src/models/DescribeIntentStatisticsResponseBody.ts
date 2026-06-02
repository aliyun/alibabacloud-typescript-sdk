// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIntentStatisticsResponseBodyGlobalIntents extends $dara.Model {
  /**
   * @example
   * 0c3f352f-d045-491d-9ce7-11f2d2b7775d
   */
  groupId?: string;
  /**
   * @example
   * 1
   */
  hitAfterNoAnswer?: number;
  /**
   * @example
   * 11
   */
  hitNum?: number;
  /**
   * @example
   * a4274627-265f-4e14-b2d6-4ee7d4f8593e
   */
  instanceId?: string;
  /**
   * @example
   * 21343425
   */
  intentId?: string;
  intentName?: string;
  /**
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
  groupId?: string;
  hitAfterNoAnswer?: number;
  /**
   * @example
   * a4274627-265f-4e14-b2d6-4ee7d4f8593e
   */
  instanceId?: string;
  intentId?: string;
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
   * @example
   * 0c3f352f-d045-491d-9ce7-11f2d2b7775d
   */
  groupId?: string;
  /**
   * @example
   * 1
   */
  hitAfterNoAnswer?: number;
  /**
   * @example
   * 10
   */
  hitNum?: number;
  /**
   * @example
   * a4274627-265f-4e14-b2d6-4ee7d4f8593e
   */
  instanceId?: string;
  /**
   * @example
   * 12343
   */
  intentId?: string;
  intentName?: string;
  rateDisplay?: string;
  /**
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
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 100
   */
  globalIntentNum?: number;
  /**
   * @example
   * []
   */
  globalIntents?: DescribeIntentStatisticsResponseBodyGlobalIntents[];
  /**
   * @example
   * 0c3f352f-d045-491d-9ce7-11f2d2b7775d
   */
  groupId?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * a4274627-265f-4e14-b2d6-4ee7d4f8593e
   */
  instanceId?: string;
  intentsAfterNoAnswer?: DescribeIntentStatisticsResponseBodyIntentsAfterNoAnswer[];
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @example
   * 123
   */
  processIntentNum?: number;
  /**
   * @example
   * []
   */
  processIntents?: DescribeIntentStatisticsResponseBodyProcessIntents[];
  /**
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
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

