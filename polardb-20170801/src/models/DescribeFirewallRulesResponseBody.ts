// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFirewallRulesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of firewall rules.
   */
  ruleList?: string[];
  static names(): { [key: string]: string } {
    return {
      ruleList: 'RuleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ruleList)) {
      $dara.Model.validateArray(this.ruleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFirewallRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * pc-*****************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The result set.
   */
  data?: DescribeFirewallRulesResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * > If the request is successful, **Successful** is returned. If the request fails, an error message is returned, such as an error code.
   * 
   * @example
   * Message
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 84D7DCD2-54F7-5BD2-B055-F5DE9D2B5264
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: The request was successful.
   * 
   * - **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      data: DescribeFirewallRulesResponseBodyData,
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

