// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGatewayQuotaRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the consumer list.
   * 
   * @example
   * 1
   * 
   * @deprecated
   */
  consumerPageNumber?: string;
  /**
   * @remarks
   * The page size of the consumer list.
   * 
   * @example
   * 10
   * 
   * @deprecated
   */
  consumerPageSize?: string;
  /**
   * @remarks
   * Specifies whether to return the consumer list.
   */
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

