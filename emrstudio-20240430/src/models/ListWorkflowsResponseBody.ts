// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkflowsResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  createTime?: string;
  /**
   * @example
   * workflow description
   */
  description?: string;
  /**
   * @example
   * workflow_name
   */
  name?: string;
  /**
   * @example
   * wd-3q9jo749ne5****
   */
  parentDirectoryId?: string;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  updateTime?: string;
  /**
   * @example
   * w-3q9jo749ne5****
   */
  workflowId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      name: 'name',
      parentDirectoryId: 'parentDirectoryId',
      updateTime: 'updateTime',
      workflowId: 'workflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      name: 'string',
      parentDirectoryId: 'string',
      updateTime: 'string',
      workflowId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowsResponseBody extends $dara.Model {
  data?: ListWorkflowsResponseBodyData[];
  /**
   * @example
   * 123abc****
   */
  nextToken?: string;
  /**
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      nextToken: 'nextToken',
      requestId: 'requestId',
      totalSize: 'totalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListWorkflowsResponseBodyData },
      nextToken: 'string',
      requestId: 'string',
      totalSize: 'number',
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

