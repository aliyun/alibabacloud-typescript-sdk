// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DocumentChapterSummarizeOption extends $dara.Model {
  /**
   * @remarks
   * The number of section-by-section summaries. If neither Marker nor Index is specified, the entire article is summarized by default. Marker and Index must either both be specified or both be omitted.
   * 
   * @example
   * 5
   */
  limit?: number;
  /**
   * @remarks
   * The start position for section-by-section summarization.
   * 
   * @example
   * 0
   */
  marker?: number;
  /**
   * @remarks
   * The version of section-by-section summarization.
   * 
   * @example
   * v1
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

