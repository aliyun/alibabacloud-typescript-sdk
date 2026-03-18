// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRefundPriceRequest extends $dara.Model {
  /**
   * @example
   * ng-1syeu23,ng-81293sa
   */
  billingInstanceIds?: string;
  /**
   * @example
   * c-82su12s0kl12
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      billingInstanceIds: 'billingInstanceIds',
      instanceId: 'instanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingInstanceIds: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

