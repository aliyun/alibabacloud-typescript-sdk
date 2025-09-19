// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGroupedTagsResponseBodyGroupedFileds extends $dara.Model {
  /**
   * @remarks
   * The number of assets to which the tag is added.
   * 
   * @example
   * 152
   */
  count?: string;
  /**
   * @remarks
   * The name of the tag.
   * 
   * @example
   * InternetIp
   */
  name?: string;
  /**
   * @remarks
   * The ID of the tag.
   * 
   * @example
   * 3252366
   */
  tagId?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      name: 'Name',
      tagId: 'TagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'string',
      name: 'string',
      tagId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupedTagsResponseBody extends $dara.Model {
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 0
   */
  count?: number;
  /**
   * @remarks
   * An array that consists of the statistics of the asset tags.
   */
  groupedFileds?: DescribeGroupedTagsResponseBodyGroupedFileds[];
  /**
   * @remarks
   * The HTTP status code of the request.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 151F6EB6-D5F3-417A-AF7B-4D84975DB586
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   **true**: The request is successful.
   * *   **false**: The request fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      groupedFileds: 'GroupedFileds',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      groupedFileds: { 'type': 'array', 'itemType': DescribeGroupedTagsResponseBodyGroupedFileds },
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.groupedFileds)) {
      $dara.Model.validateArray(this.groupedFileds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

