// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDiscoveredResourceResponseBodyDiscoveredResourceDetail } from "./GetDiscoveredResourceResponseBodyDiscoveredResourceDetail";


export class GetDiscoveredResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the resource.
   */
  discoveredResourceDetail?: GetDiscoveredResourceResponseBodyDiscoveredResourceDetail;
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
      discoveredResourceDetail: GetDiscoveredResourceResponseBodyDiscoveredResourceDetail,
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

