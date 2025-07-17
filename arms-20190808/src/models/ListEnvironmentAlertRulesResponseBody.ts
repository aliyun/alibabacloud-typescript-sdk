// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEnvironmentAlertRulesResponseBodyDataRules extends $dara.Model {
  /**
   * @remarks
   * The ID of the alert rule.
   * 
   * @example
   * 9502571
   */
  alertId?: number;
  /**
   * @remarks
   * The name of the alert rule.
   * 
   * @example
   * mysql-CS-MySQLInnoDBLogWaits_lu
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      alertId: 'AlertId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertId: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvironmentAlertRulesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The queried alert groups.
   */
  groups?: string[];
  /**
   * @remarks
   * The queried rules.
   */
  rules?: ListEnvironmentAlertRulesResponseBodyDataRules[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 26
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      groups: 'Groups',
      rules: 'Rules',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groups: { 'type': 'array', 'itemType': 'string' },
      rules: { 'type': 'array', 'itemType': ListEnvironmentAlertRulesResponseBodyDataRules },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.groups)) {
      $dara.Model.validateArray(this.groups);
    }
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvironmentAlertRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. The status code 200 indicates that the request was successful. Other status codes indicate that the request failed.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The struct returned.
   */
  data?: ListEnvironmentAlertRulesResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * message
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4C518054-852F-4023-ABC1-4AF95FF7****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
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
      code: 'number',
      data: ListEnvironmentAlertRulesResponseBodyData,
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

