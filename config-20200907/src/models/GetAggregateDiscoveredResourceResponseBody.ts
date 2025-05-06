// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAggregateDiscoveredResourceResponseBodyDiscoveredResourceDetail } from "./GetAggregateDiscoveredResourceResponseBodyDiscoveredResourceDetail";


export class GetAggregateDiscoveredResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the resource.
   */
  discoveredResourceDetail?: GetAggregateDiscoveredResourceResponseBodyDiscoveredResourceDetail;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E4D71ACE-6B0A-46E0-8352-56952378CC7F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      discoveredResourceDetail: 'DiscoveredResourceDetail',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discoveredResourceDetail: GetAggregateDiscoveredResourceResponseBodyDiscoveredResourceDetail,
      requestId: 'string',
    };
  }

  validate() {
    if(this.discoveredResourceDetail && typeof (this.discoveredResourceDetail as any).validate === 'function') {
      (this.discoveredResourceDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

