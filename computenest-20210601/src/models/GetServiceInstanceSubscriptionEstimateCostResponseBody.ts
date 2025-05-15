// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetServiceInstanceSubscriptionEstimateCostResponseBodyResourcePrices } from "./GetServiceInstanceSubscriptionEstimateCostResponseBodyResourcePrices";


export class GetServiceInstanceSubscriptionEstimateCostResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 464C8CB6-A548-5206-B83C-D32A8E43EC21
   */
  requestId?: string;
  /**
   * @remarks
   * List of resource price information.
   */
  resourcePrices?: GetServiceInstanceSubscriptionEstimateCostResponseBodyResourcePrices[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourcePrices: 'ResourcePrices',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourcePrices: { 'type': 'array', 'itemType': GetServiceInstanceSubscriptionEstimateCostResponseBodyResourcePrices },
    };
  }

  validate() {
    if(Array.isArray(this.resourcePrices)) {
      $dara.Model.validateArray(this.resourcePrices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

