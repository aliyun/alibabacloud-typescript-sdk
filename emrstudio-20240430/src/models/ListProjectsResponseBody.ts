// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectsResponseBodyData extends $dara.Model {
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * project_name
   */
  name?: string;
  /**
   * @example
   * p-3q9jo749ne5****
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      name: 'name',
      projectId: 'projectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      projectId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBody extends $dara.Model {
  data?: ListProjectsResponseBodyData[];
  /**
   * @example
   * 123abc***
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
      data: { 'type': 'array', 'itemType': ListProjectsResponseBodyData },
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

