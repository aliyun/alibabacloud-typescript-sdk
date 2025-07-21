// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateConsumerAuthorizationRuleResponseBodyData extends $dara.Model {
  /**
   * @example
   * car-d06p196m1hkg9ukum5pg
   */
  consumerAuthorizationRuleId?: string;
  static names(): { [key: string]: string } {
    return {
      consumerAuthorizationRuleId: 'consumerAuthorizationRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerAuthorizationRuleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConsumerAuthorizationRuleResponseBody extends $dara.Model {
  /**
   * @example
   * Ok
   */
  code?: string;
  data?: CreateConsumerAuthorizationRuleResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 6CC83C32-3B5A-57EE-9AFE-D0D51822C7BA
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
      data: CreateConsumerAuthorizationRuleResponseBodyData,
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

