// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSqlStatementContentsRequest extends $dara.Model {
  /**
   * @example
   * oss://oss-****.cn-hangzhou.oss-dls.aliyuncs.com/w-86a9a4da*****a1/spark/logs/jr-b737b****6164d/driver/st-afde7******bb3f
   */
  fileName?: string;
  /**
   * @example
   * 2000
   */
  maxResults?: number;
  /**
   * @example
   * 1
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'fileName',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

