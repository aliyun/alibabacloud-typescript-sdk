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
  /**
   * @remarks
   * Specifies whether to return the general subject list. This parameter applies to both consumer and consumer group rules.
   */
  withSubjects?: boolean;
  static names(): { [key: string]: string } {
    return {
      consumerPageNumber: 'consumerPageNumber',
      consumerPageSize: 'consumerPageSize',
      withConsumers: 'withConsumers',
      withSubjects: 'withSubjects',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerPageNumber: 'string',
      consumerPageSize: 'string',
      withConsumers: 'boolean',
      withSubjects: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

