// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryContentResponseBodyMatchesMatchListVector } from "./QueryContentResponseBodyMatchesMatchListVector";


export class QueryContentResponseBodyMatchesMatchList extends $dara.Model {
  /**
   * @remarks
   * The content that is used for full-text search. If you leave this parameter empty, only vector search is used. If you do not leave this parameter empty, two-way retrieval based on vector search and full-text search is used.
   * 
   * >  You must specify at least one of the Content and Vector parameters.
   * 
   * @example
   * Cloud-native data warehouse AnalyticDB PostgreSQL Edition provides a simple, fast, and cost-effective PB-level cloud data warehouse solution.
   */
  content?: string;
  /**
   * @remarks
   * The name of the document.
   * 
   * >  You can call the [ListDocuments](https://help.aliyun.com/document_detail/2618453.html) operation to query a list of documents.
   * 
   * @example
   * my_doc.txt
   */
  fileName?: string;
  /**
   * @remarks
   * The public URL of the query result image, valid for 2 hours
   * 
   * @example
   * https://xxx-cn-beijing.aliyuncs.com/image/test.png
   */
  fileURL?: string;
  /**
   * @remarks
   * The unique ID of the vector data.
   * 
   * @example
   * doca-1234
   */
  id?: string;
  /**
   * @remarks
   * Metadata during document loader loading.
   * 
   * @example
   * {"page_pos": 1}
   */
  loaderMetadata?: string;
  /**
   * @remarks
   * The metadata.
   */
  metadata?: { [key: string]: string };
  /**
   * @remarks
   * Re-ranking score.
   * 
   * @example
   * 6.2345
   */
  rerankScore?: number;
  /**
   * @remarks
   * Source of the retrieval results:
   * 
   * - 1 indicates vector retrieval
   * - 2 indicates full-text retrieval
   * - 3 indicates dual-path recall
   * 
   * @example
   * 1
   */
  retrievalSource?: number;
  /**
   * @remarks
   * The similarity score of the data. It is related to the `l2, ip, or cosine` algorithm that is specified when you create an index.
   * 
   * @example
   * 0.12345
   */
  score?: number;
  /**
   * @remarks
   * The vector data. The length of the value must be the same as that of the Dimension parameter in the [CreateCollection](https://help.aliyun.com/document_detail/2401497.html) operation.
   * 
   * >  If you leave this parameter empty, only full-text search results are returned.
   */
  vector?: QueryContentResponseBodyMatchesMatchListVector;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      fileName: 'FileName',
      fileURL: 'FileURL',
      id: 'Id',
      loaderMetadata: 'LoaderMetadata',
      metadata: 'Metadata',
      rerankScore: 'RerankScore',
      retrievalSource: 'RetrievalSource',
      score: 'Score',
      vector: 'Vector',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      fileName: 'string',
      fileURL: 'string',
      id: 'string',
      loaderMetadata: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      rerankScore: 'number',
      retrievalSource: 'number',
      score: 'number',
      vector: QueryContentResponseBodyMatchesMatchListVector,
    };
  }

  validate() {
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    if(this.vector && typeof (this.vector as any).validate === 'function') {
      (this.vector as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

