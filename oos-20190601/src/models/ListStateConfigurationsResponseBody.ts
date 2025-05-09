// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListStateConfigurationsResponseBodyStateConfigurations } from "./ListStateConfigurationsResponseBodyStateConfigurations";


export class ListStateConfigurationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination token that was used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAASO3cL82+b5iji7bfPNpMh8=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1306108F-610C-40FD-AAD5-DA13E8B00BE9
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the desired-state configurations.
   */
  stateConfigurations?: ListStateConfigurationsResponseBodyStateConfigurations[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      stateConfigurations: 'StateConfigurations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      stateConfigurations: { 'type': 'array', 'itemType': ListStateConfigurationsResponseBodyStateConfigurations },
    };
  }

  validate() {
    if(Array.isArray(this.stateConfigurations)) {
      $dara.Model.validateArray(this.stateConfigurations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

