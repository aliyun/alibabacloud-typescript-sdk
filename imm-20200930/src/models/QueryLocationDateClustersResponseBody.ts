// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LocationDateCluster } from "./LocationDateCluster";


export class QueryLocationDateClustersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of spatiotemporal clusters.
   */
  locationDateClusters?: LocationDateCluster[];
  /**
   * @remarks
   * The pagination token.
   * 
   * @example
   * MzQNjmY2MzYxNhNjk2ZNjEu****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7055FCF7-4D7B-098E-BD4D-DD2932B0****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      locationDateClusters: 'LocationDateClusters',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      locationDateClusters: { 'type': 'array', 'itemType': LocationDateCluster },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.locationDateClusters)) {
      $dara.Model.validateArray(this.locationDateClusters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

