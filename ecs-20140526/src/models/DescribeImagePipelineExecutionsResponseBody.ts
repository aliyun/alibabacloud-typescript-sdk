// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImagePipelineExecutionsResponseBodyImagePipelineExecutionImagePipelineExecutionSetTagsTag extends $dara.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagePipelineExecutionsResponseBodyImagePipelineExecutionImagePipelineExecutionSetTags extends $dara.Model {
  tag?: DescribeImagePipelineExecutionsResponseBodyImagePipelineExecutionImagePipelineExecutionSetTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeImagePipelineExecutionsResponseBodyImagePipelineExecutionImagePipelineExecutionSetTagsTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagePipelineExecutionsResponseBodyImagePipelineExecutionImagePipelineExecutionSet extends $dara.Model {
  creationTime?: string;
  errorCode?: string;
  errorInfo?: string;
  executionId?: string;
  imageId?: string;
  imagePipelineId?: string;
  message?: string;
  modifiedTime?: string;
  resourceGroupId?: string;
  status?: string;
  tags?: DescribeImagePipelineExecutionsResponseBodyImagePipelineExecutionImagePipelineExecutionSetTags;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      errorCode: 'ErrorCode',
      errorInfo: 'ErrorInfo',
      executionId: 'ExecutionId',
      imageId: 'ImageId',
      imagePipelineId: 'ImagePipelineId',
      message: 'Message',
      modifiedTime: 'ModifiedTime',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      errorCode: 'string',
      errorInfo: 'string',
      executionId: 'string',
      imageId: 'string',
      imagePipelineId: 'string',
      message: 'string',
      modifiedTime: 'string',
      resourceGroupId: 'string',
      status: 'string',
      tags: DescribeImagePipelineExecutionsResponseBodyImagePipelineExecutionImagePipelineExecutionSetTags,
    };
  }

  validate() {
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagePipelineExecutionsResponseBodyImagePipelineExecution extends $dara.Model {
  imagePipelineExecutionSet?: DescribeImagePipelineExecutionsResponseBodyImagePipelineExecutionImagePipelineExecutionSet[];
  static names(): { [key: string]: string } {
    return {
      imagePipelineExecutionSet: 'ImagePipelineExecutionSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imagePipelineExecutionSet: { 'type': 'array', 'itemType': DescribeImagePipelineExecutionsResponseBodyImagePipelineExecutionImagePipelineExecutionSet },
    };
  }

  validate() {
    if(Array.isArray(this.imagePipelineExecutionSet)) {
      $dara.Model.validateArray(this.imagePipelineExecutionSet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagePipelineExecutionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the image pipeline executions.
   */
  imagePipelineExecution?: DescribeImagePipelineExecutionsResponseBodyImagePipelineExecution;
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
   * The token returned in this call. Use this token to retrieve the next page of results. For more information, see the operation description.
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
   * The total number of image pipeline executions.
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

