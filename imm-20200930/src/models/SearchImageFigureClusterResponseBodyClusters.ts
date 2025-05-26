// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Boundary } from "./Boundary";


export class SearchImageFigureClusterResponseBodyClusters extends $dara.Model {
  /**
   * @remarks
   * The bounding box of the face.
   */
  boundary?: Boundary;
  /**
   * @remarks
   * The ID of the face cluster that contains faces similar to the face within the bounding box.
   * 
   * @example
   * Cluster-ca730577-06b1-42c7-a25b-8f2c7******
   */
  clusterId?: string;
  /**
   * @remarks
   * The similarity between the face within the bounding box and the face cluster. Valid value: 0 to 1.
   * 
   * @example
   * 0.87413794
   */
  similarity?: number;
  static names(): { [key: string]: string } {
    return {
      boundary: 'Boundary',
      clusterId: 'ClusterId',
      similarity: 'Similarity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boundary: Boundary,
      clusterId: 'string',
      similarity: 'number',
    };
  }

  validate() {
    if(this.boundary && typeof (this.boundary as any).validate === 'function') {
      (this.boundary as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

