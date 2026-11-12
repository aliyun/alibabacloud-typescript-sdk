// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListImageTagsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The label categorization.
   * 
   * @example
   * Solution
   */
  category?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * AIGC
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImageTagsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InvalidAppInstanceGroup.NotFound
   */
  code?: string;
  /**
   * @remarks
   * The list of built-in image tags.
   */
  data?: ListImageTagsResponseBodyData[];
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The error message returned when an error occurs.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The token for the next query.
   * 
   * @example
   * ptnJAAAAAAAxNzE5OTEwNQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListImageTagsResponseBodyData },
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
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

