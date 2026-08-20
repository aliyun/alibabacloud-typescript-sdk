// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class WebSearchResponseBodySearchResult extends $dara.Model {
  /**
   * @remarks
   * The snippet of the web page content.
   * 
   * @example
   * Spring Boot makes it easy to create stand-alone, production-grade Spring based Applications.
   */
  snippet?: string;
  /**
   * @remarks
   * The title of the web page.
   * 
   * @example
   * Spring Boot
   */
  title?: string;
  /**
   * @remarks
   * The URL of the web page.
   * 
   * @example
   * https://xxx/projects/spring-boot
   */
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
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * ErrorMessage Code
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * ErrorMessage Example
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The search query statement.
   * 
   * @example
   * Spring Boot
   */
  query?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A30D0930-xxxx-xxxx-xxxx-C2C661CC8B58
   */
  requestId?: string;
  /**
   * @remarks
   * The list of search results.
   */
  searchResult?: WebSearchResponseBodySearchResult[];
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of results returned.
   * 
   * @example
   * 10
   */
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

