// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListExchangesResponseBodyDataExchanges } from "./ListExchangesResponseBodyDataExchanges";


export class ListExchangesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The exchanges.
   */
  exchanges?: ListExchangesResponseBodyDataExchanges[];
  /**
   * @remarks
   * The maximum number of entries returned.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the end of the current returned page.``
   * 
   * *   If the value of this parameter is empty, the next query is not required and the token used to start the next query is unavailable.``
   * *   If the value of this parameter is not empty, the next query is required, and the value is the token used to start the next query.``
   * 
   * @example
   * AAAANDQBYW1xcC1jbi03cHAybXdiY3AwMGEBdmhvc3QBAXNkZndhYWJhATE2NDkzMTM4OTU5NDIB4o3z1pPwWzk4aYuiRffi8R6-****
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      exchanges: 'Exchanges',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exchanges: { 'type': 'array', 'itemType': ListExchangesResponseBodyDataExchanges },
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.exchanges)) {
      $dara.Model.validateArray(this.exchanges);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

