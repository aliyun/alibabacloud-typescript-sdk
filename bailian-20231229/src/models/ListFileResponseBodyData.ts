// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListFileResponseBodyDataFileList } from "./ListFileResponseBodyDataFileList";


export class ListFileResponseBodyData extends $dara.Model {
  fileList?: ListFileResponseBodyDataFileList[];
  /**
   * @example
   * true
   */
  hasNext?: boolean;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * 4jzbJk9J6lNeuXD9hP0viA==
   */
  nextToken?: string;
  /**
   * @example
   * 48
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      fileList: 'FileList',
      hasNext: 'HasNext',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileList: { 'type': 'array', 'itemType': ListFileResponseBodyDataFileList },
      hasNext: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.fileList)) {
      $dara.Model.validateArray(this.fileList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

