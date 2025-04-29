// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeImageComponentsResponseBodyImageComponent } from "./DescribeImageComponentsResponseBodyImageComponent";


export class DescribeImageComponentsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the image components.
   */
  imageComponent?: DescribeImageComponentsResponseBodyImageComponent;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. For information about how to use the returned value, see the "Usage notes" section of this topic.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of image components returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      imageComponent: 'ImageComponent',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageComponent: DescribeImageComponentsResponseBodyImageComponent,
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.imageComponent && typeof (this.imageComponent as any).validate === 'function') {
      (this.imageComponent as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

