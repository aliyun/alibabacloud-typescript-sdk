// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDocumentChunksRequest extends $dara.Model {
  /**
   * @example
   * test
   */
  chunkTitlePattern?: string;
  /**
   * @example
   * test.md
   */
  documentName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * kb-***
   */
  kbUuid?: string;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * zCXSmY0CJbybp6FZV7vo0Wjw64X-*****
   */
  nextToken?: string;
  /**
   * @example
   * hits
   */
  sortFieldName?: string;
  /**
   * @example
   * DESC
   */
  sortOrder?: string;
  static names(): { [key: string]: string } {
    return {
      chunkTitlePattern: 'ChunkTitlePattern',
      documentName: 'DocumentName',
      kbUuid: 'KbUuid',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      sortFieldName: 'SortFieldName',
      sortOrder: 'SortOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkTitlePattern: 'string',
      documentName: 'string',
      kbUuid: 'string',
      maxResults: 'number',
      nextToken: 'string',
      sortFieldName: 'string',
      sortOrder: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

