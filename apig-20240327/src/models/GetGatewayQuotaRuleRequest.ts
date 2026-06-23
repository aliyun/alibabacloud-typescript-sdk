// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGatewayQuotaRuleRequest extends $dara.Model {
  /**
   * @example
   * 1
   * 
   * @deprecated
   */
  consumerPageNumber?: string;
  /**
   * @example
   * 10
   * 
   * @deprecated
   */
  consumerPageSize?: string;
  withConsumers?: boolean;
  static names(): { [key: string]: string } {
    return {
      consumerPageNumber: 'consumerPageNumber',
      consumerPageSize: 'consumerPageSize',
      withConsumers: 'withConsumers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerPageNumber: 'string',
      consumerPageSize: 'string',
      withConsumers: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

