// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeImagePipelineExecutionsResponseBodyImagePipelineExecution } from "./DescribeImagePipelineExecutionsResponseBodyImagePipelineExecution";


export class DescribeImagePipelineExecutionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details of the image creation tasks.
   */
  imagePipelineExecution?: DescribeImagePipelineExecutionsResponseBodyImagePipelineExecution;
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists. For information about how to use the returned value, see the "Usage notes" section in this topic.
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
   * The total number of returned image components.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      imagePipelineExecution: 'ImagePipelineExecution',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imagePipelineExecution: DescribeImagePipelineExecutionsResponseBodyImagePipelineExecution,
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.imagePipelineExecution && typeof (this.imagePipelineExecution as any).validate === 'function') {
      (this.imagePipelineExecution as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

