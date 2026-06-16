// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class WebSearchResponseBodySearchResult extends $dara.Model {
  snippet?: string;
  title?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      snippet: 'Snippet',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snippet: 'string',
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WebSearchResponseBody extends $dara.Model {
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: number;
  query?: string;
  requestId?: string;
  searchResult?: WebSearchResponseBodySearchResult[];
  success?: boolean;
  totalResults?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      query: 'Query',
      requestId: 'RequestId',
      searchResult: 'SearchResult',
      success: 'Success',
      totalResults: 'TotalResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      query: 'string',
      requestId: 'string',
      searchResult: { 'type': 'array', 'itemType': WebSearchResponseBodySearchResult },
      success: 'boolean',
      totalResults: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.searchResult)) {
      $dara.Model.validateArray(this.searchResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

