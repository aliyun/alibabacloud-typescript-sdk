// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyTagPoliciesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether it is a primary key.
   * 
   * @example
   * true
   */
  carryData?: boolean;
  /**
   * @remarks
   * Indicates whether the feature is enabled. Valid values:
   * 
   * - `true`: Enabled.
   * - `false`: Disabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The primary key ID.
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
   * The ratio.
   * 
   * @example
   * 10
   */
  rate?: number;
  /**
   * @remarks
   * Indicates whether the deletion is successful.
   */
  remove?: boolean;
  /**
   * @remarks
   * The tag rules.
   * 
   * @example
   * {\\"_base\\": {\\"rate\\": 100, \\"remove\\": true}, \\"blue\\": {\\"rate\\": 0}}
   */
  rules?: string;
  /**
   * @remarks
   * The effective status.
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
   * The data overview.
   */
  data?: ApplyTagPoliciesResponseBodyData[];
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 316F5F64-F73D-42DC-8632-01E308B6****
   */
  requestId?: string;
  /**
   * @remarks
   * The request result.
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

