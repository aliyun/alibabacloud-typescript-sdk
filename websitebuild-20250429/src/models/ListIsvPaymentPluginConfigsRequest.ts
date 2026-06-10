// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIsvPaymentPluginConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * Business ID
   * 
   * @example
   * WD20250821161210000001
   */
  bizId?: string;
  /**
   * @remarks
   * Number of results per query.
   * 
   * Valid range: 10 to 100. Default Value: 20.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * Token indicating the start of the next query. It is empty when there is no next query.
   * 
   * @example
   * FFh3Xqm+JgZ/U9Jyb7wdVr9LWk80Tghn5UZjbcWEVEderBcbVF+Y6PS0i8PpCL4PQZ3e0C9oEH0Asd4tJEuGtkl2WuKdiWZpEwadNydQdJPFM=
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

