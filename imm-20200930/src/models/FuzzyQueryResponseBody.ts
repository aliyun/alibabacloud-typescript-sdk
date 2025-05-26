// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { File } from "./File";


export class FuzzyQueryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The files.
   */
  files?: File[];
  /**
   * @remarks
   * A pagination token.
   * 
   * It can be used in the next request to retrieve a new page of results.
   * 
   * If NextToken is empty, no next page exists.
   * 
   * This parameter is required.
   * 
   * @example
   * MTIzNDU2Nzg6aW1tdGVzdDpleGFtcGxlYnVja2V0OmRhdGFzZXQwMDE6b3NzOi8vZXhhbXBsZWJ1Y2tldC9zYW1wbGVvYmplY3QxLmpwZw==
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1B3D5E0A-D8B8-4DA0-8127-ED32C851****
   */
  requestId?: string;
  /**
   * @remarks
   * The number of hits.
   */
  totalHits?: number;
  static names(): { [key: string]: string } {
    return {
      files: 'Files',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalHits: 'TotalHits',
    };
  }

  static types(): { [key: string]: any } {
    return {
      files: { 'type': 'array', 'itemType': File },
      nextToken: 'string',
      requestId: 'string',
      totalHits: 'number',
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

