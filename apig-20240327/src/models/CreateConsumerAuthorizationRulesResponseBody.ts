// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateConsumerAuthorizationRulesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The authentication rule IDs.
   */
  consumerAuthorizationRuleIds?: string[];
  static names(): { [key: string]: string } {
    return {
      consumerAuthorizationRuleIds: 'consumerAuthorizationRuleIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerAuthorizationRuleIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.consumerAuthorizationRuleIds)) {
      $dara.Model.validateArray(this.consumerAuthorizationRuleIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConsumerAuthorizationRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The response parameters.
   */
  data?: CreateConsumerAuthorizationRulesResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 3ACFC7A7-45A9-58CF-B2D5-765B60254695
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateConsumerAuthorizationRulesResponseBodyData,
      message: 'string',
      requestId: 'string',
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

