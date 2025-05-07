// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateDatasetResponseBodyDataNewsArticleResultsData } from "./UpdateDatasetResponseBodyDataNewsArticleResultsData";


export class UpdateDatasetResponseBodyDataNewsArticleResults extends $dara.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  /**
   * @example
   * 1
   */
  current?: number;
  data?: UpdateDatasetResponseBodyDataNewsArticleResultsData[];
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 10
   */
  size?: number;
  /**
   * @example
   * 100
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      current: 'Current',
      data: 'Data',
      message: 'Message',
      size: 'Size',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      current: 'number',
      data: { 'type': 'array', 'itemType': UpdateDatasetResponseBodyDataNewsArticleResultsData },
      message: 'string',
      size: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

