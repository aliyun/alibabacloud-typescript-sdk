// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { File } from "./File";


export class SearchSimilarImageClustersResponseBodySimilarImageClusters extends $dara.Model {
  files?: File[];
  static names(): { [key: string]: string } {
    return {
      files: 'files',
    };
  }

  static types(): { [key: string]: any } {
    return {
      files: { 'type': 'array', 'itemType': File },
    };
  }

  validate() {
    if(Array.isArray(this.files)) {
      $dara.Model.validateArray(this.files);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchSimilarImageClustersResponseBody extends $dara.Model {
  /**
   * @example
   * NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0***
   */
  nextMarker?: string;
  similarImageClusters?: SearchSimilarImageClustersResponseBodySimilarImageClusters[];
  static names(): { [key: string]: string } {
    return {
      nextMarker: 'next_marker',
      similarImageClusters: 'similar_image_clusters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextMarker: 'string',
      similarImageClusters: { 'type': 'array', 'itemType': SearchSimilarImageClustersResponseBodySimilarImageClusters },
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

