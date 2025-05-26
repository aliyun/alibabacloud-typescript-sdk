// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SimilarImageCluster } from "./SimilarImageCluster";


export class QuerySimilarImageClustersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination token. If the total number of clusters is greater than the value of MaxResults, this token can be used to retrieve the next page. This parameter has a value only if not all the clusters that meet the condition are returned.
   * 
   * Pass this value as the value of NextToken in the next query to return the subsequent clusters.
   * 
   * @example
   * CAESEgoQCg4KClVwZGF0ZVRpbWUQARgBIs8ECgkAAJLUwUCAQ****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CA995EFD-083D-4F40-BE8A-BDF75FFF****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of similar image clusters.
   */
  similarImageClusters?: SimilarImageCluster[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      similarImageClusters: 'SimilarImageClusters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      similarImageClusters: { 'type': 'array', 'itemType': SimilarImageCluster },
    };
  }

  validate() {
    if(Array.isArray(this.similarImageClusters)) {
      $dara.Model.validateArray(this.similarImageClusters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

