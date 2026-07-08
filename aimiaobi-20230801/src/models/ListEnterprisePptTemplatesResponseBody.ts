// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEnterprisePptTemplatesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The URL of the cover image.
   * 
   * @example
   * http://xxx.com/a.png
   */
  coverImg?: string;
  /**
   * @remarks
   * The ID of the template.
   * 
   * @example
   * 10
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      coverImg: 'CoverImg',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverImg: 'string',
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnterprisePptTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * NoData
   */
  code?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  current?: number;
  /**
   * @remarks
   * An array of enterprise-specific PPT template objects.
   */
  data?: ListEnterprisePptTemplatesResponseBodyData[];
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
   * The maximum number of results per page, as specified in the request. Note: This parameter is not yet in effect.
   * 
   * @example
   * 4
   */
  maxResults?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The token for the next page of results. An empty value indicates that no more data is available. Note: This parameter is not yet in effect.
   * 
   * @example
   * CAESGgoSChAKDGNvbXBsZXRlVGltZRABCgQiAggAGAAiQAoJANEQ4AACjMDLgAAADFTNzMyZDMwMzAzMDM4NzA3MjZjN2E2NDYyNzUzODMxMzY3ODM0NmIzNTZkNjc=
   */
  nextToken?: string;
  /**
   * @remarks
   * The unique request ID. Provide this ID when you contact technical support.
   * 
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @remarks
   * The number of entries returned on the current page (the \\"page size\\").
   * 
   * @example
   * 10
   */
  size?: number;
  /**
   * @remarks
   * Indicates whether the request succeeded. `true` indicates success, and `false` indicates failure.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries that match the query.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      current: 'Current',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      size: 'Size',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      current: 'number',
      data: { 'type': 'array', 'itemType': ListEnterprisePptTemplatesResponseBodyData },
      httpStatusCode: 'number',
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      size: 'number',
      success: 'boolean',
      totalCount: 'number',
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

