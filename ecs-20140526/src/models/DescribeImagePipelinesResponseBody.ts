// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeImagePipelinesResponseBodyImagePipeline } from "./DescribeImagePipelinesResponseBodyImagePipeline";


export class DescribeImagePipelinesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the image templates.
   */
  imagePipeline?: DescribeImagePipelinesResponseBodyImagePipeline;
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
   * A pagination token. It can be used in the next request to retrieve a new page of results. For information about how to use the return value, see the "Usage notes" section of this topic.
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
   * The total number of image templates returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      imagePipeline: 'ImagePipeline',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imagePipeline: DescribeImagePipelinesResponseBodyImagePipeline,
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.imagePipeline && typeof (this.imagePipeline as any).validate === 'function') {
      (this.imagePipeline as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

