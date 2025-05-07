// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateDatasetResponseBodyDataNewsArticleResults } from "./UpdateDatasetResponseBodyDataNewsArticleResults";


export class UpdateDatasetResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2024-11-12 21:46:24
   */
  createTime?: string;
  /**
   * @example
   * xxx
   */
  createUser?: string;
  /**
   * @example
   * xxx
   */
  datasetDescription?: string;
  /**
   * @example
   * 1
   */
  datasetId?: number;
  /**
   * @example
   * xxx
   */
  datasetName?: string;
  /**
   * @example
   * CustomSemanticSearch
   */
  datasetType?: string;
  newsArticleResults?: UpdateDatasetResponseBodyDataNewsArticleResults[];
  /**
   * @example
   * 1
   */
  searchDatasetEnable?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      datasetDescription: 'DatasetDescription',
      datasetId: 'DatasetId',
      datasetName: 'DatasetName',
      datasetType: 'DatasetType',
      newsArticleResults: 'NewsArticleResults',
      searchDatasetEnable: 'SearchDatasetEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createUser: 'string',
      datasetDescription: 'string',
      datasetId: 'number',
      datasetName: 'string',
      datasetType: 'string',
      newsArticleResults: { 'type': 'array', 'itemType': UpdateDatasetResponseBodyDataNewsArticleResults },
      searchDatasetEnable: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.newsArticleResults)) {
      $dara.Model.validateArray(this.newsArticleResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

