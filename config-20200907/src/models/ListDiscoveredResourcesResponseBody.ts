// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDiscoveredResourcesResponseBodyDiscoveredResourceProfiles } from "./ListDiscoveredResourcesResponseBodyDiscoveredResourceProfiles";


export class ListDiscoveredResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the resources.
   */
  discoveredResourceProfiles?: ListDiscoveredResourcesResponseBodyDiscoveredResourceProfiles;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C7817373-78CB-4F9A-8AFA-E7A88E9D64A2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      discoveredResourceProfiles: 'DiscoveredResourceProfiles',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discoveredResourceProfiles: ListDiscoveredResourcesResponseBodyDiscoveredResourceProfiles,
      requestId: 'string',
    };
  }

  validate() {
    if(this.discoveredResourceProfiles && typeof (this.discoveredResourceProfiles as any).validate === 'function') {
      (this.discoveredResourceProfiles as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

