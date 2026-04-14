// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStacksResponseBodyStacks extends $dara.Model {
  /**
   * @example
   * 2025-05-07T02:21:28Z
   */
  createTime?: string;
  /**
   * @example
   * description of stack
   */
  description?: string;
  /**
   * @example
   * stack-test
   */
  name?: string;
  /**
   * @example
   * OSS
   */
  source?: string;
  /**
   * @example
   * oss::https://terraform-pipeline.oss-eu-central-1.aliyuncs.com/code.zip
   */
  sourcePath?: string;
  /**
   * @example
   * description of stack
   */
  stackDescription?: string;
  /**
   * @example
   * stack-as1d4vld898ppnqxxxxxx
   */
  stackId?: string;
  /**
   * @example
   * stack-test
   */
  stackName?: string;
  /**
   * @example
   * Deployed
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      name: 'name',
      source: 'source',
      sourcePath: 'sourcePath',
      stackDescription: 'stackDescription',
      stackId: 'stackId',
      stackName: 'stackName',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      name: 'string',
      source: 'string',
      sourcePath: 'string',
      stackDescription: 'string',
      stackId: 'string',
      stackName: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStacksResponseBody extends $dara.Model {
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * LC4NJL3Ru2bIiRdnbADPQp4dD+2BRJj42DLT6GrZysw=
   */
  nextToken?: string;
  /**
   * @example
   * 3E49127A-BB65-5CCD-AB93-0EC0A43E5446
   */
  requestId?: string;
  stacks?: ListStacksResponseBodyStacks[];
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      requestId: 'requestId',
      stacks: 'stacks',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      stacks: { 'type': 'array', 'itemType': ListStacksResponseBodyStacks },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.stacks)) {
      $dara.Model.validateArray(this.stacks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

