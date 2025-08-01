// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyTagPoliciesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the field is the primary key.
   * 
   * @example
   * true
   */
  carryData?: boolean;
  /**
   * @remarks
   * Indicates whether the rule is enabled. Valid values:
   * 
   * *   `true`: The rule is enabled.
   * *   `false`: The rule is disabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The ID of the primary key.
   * 
   * @example
   * 12
   */
  id?: number;
  /**
   * @remarks
   * The number of instances.
   * 
   * @example
   * 1
   */
  instanceNum?: number;
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The rate.
   * 
   * @example
   * 10
   */
  rate?: number;
  /**
   * @remarks
   * Indicates whether the routing rule was deleted.
   */
  remove?: boolean;
  /**
   * @remarks
   * The details of the routing rule.
   * 
   * @example
   * {\\"_base\\": {\\"rate\\": 100, \\"remove\\": true}, \\"blue\\": {\\"rate\\": 0}}
   */
  rules?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The tag.
   * 
   * @example
   * gray
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      carryData: 'CarryData',
      enable: 'Enable',
      id: 'Id',
      instanceNum: 'InstanceNum',
      name: 'Name',
      rate: 'Rate',
      remove: 'Remove',
      rules: 'Rules',
      status: 'Status',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carryData: 'boolean',
      enable: 'boolean',
      id: 'number',
      instanceNum: 'number',
      name: 'string',
      rate: 'number',
      remove: 'boolean',
      rules: 'string',
      status: 'number',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyTagPoliciesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the data.
   */
  data?: ApplyTagPoliciesResponseBodyData[];
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 316F5F64-F73D-42DC-8632-01E308B6****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ApplyTagPoliciesResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

