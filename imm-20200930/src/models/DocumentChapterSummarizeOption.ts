// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DocumentChapterSummarizeOption extends $dara.Model {
  /**
   * @remarks
   * The maximum number of results to return per request. If you do not specify this parameter, the default value is used.
   */
  limit?: number;
  /**
   * @remarks
   * The pagination token. It specifies the starting point for the query. To retrieve the next page of results, set this parameter to the marker value from the previous response.
   */
  marker?: number;
  /**
   * @remarks
   * The summarization model version. If you do not specify this parameter, the default model version is used.
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'Limit',
      marker: 'Marker',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      marker: 'number',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

