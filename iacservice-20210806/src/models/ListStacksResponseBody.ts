// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStacksResponseBodyStacks extends $dara.Model {
  /**
   * @remarks
   * The creation time in UTC. The time follows the ISO 8601 standard in the YYYY-MM-DDTHH:mm:ssZ format.
   * 
   * @example
   * 2025-05-07T02:21:28Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the stack.
   * 
   * @example
   * description of stack
   */
  description?: string;
  /**
   * @remarks
   * The stack name.
   * 
   * @example
   * stack-test
   */
  name?: string;
  /**
   * @remarks
   * The creation source. Valid values:
   * - OSS: a template stored in Object Storage Service (OSS).
   * - IAC_SERVICE_MODULE: a template created in the automation service console.
   * 
   * @example
   * OSS
   */
  source?: string;
  /**
   * @remarks
   * The path value of the configuration source. The value cannot exceed 1000 characters.
   * - If the source is OSS, the value is in the format oss::<file link> and must be a zip file. Example: oss::https://terraform-pipeline.oss-eu-central-1.aliyuncs.com/code.zip
   * - If the source is IAC_SERVICE_MODULE, the value is a template ID. Example: mod-xxxxx
   * 
   * @example
   * oss::https://terraform-pipeline.oss-eu-central-1.aliyuncs.com/code.zip
   */
  sourcePath?: string;
  /**
   * @remarks
   * The description of the stack.
   * 
   * @example
   * description of stack
   */
  stackDescription?: string;
  /**
   * @remarks
   * The stack ID, which is the unique identifier generated after the stack is created.
   * 
   * @example
   * stack-as1d4vld898ppnqxxxxxx
   */
  stackId?: string;
  /**
   * @remarks
   * The stack name (deprecated). Use name instead.
   * 
   * @example
   * stack-test
   */
  stackName?: string;
  /**
   * @remarks
   * The stack status.
   * | Name | Description |
   * |------|------|
   * | Creating | Being created. |
   * | Created | Created. |
   * | Waiting | Waiting for deployment. |
   * | Deploying | Being deployed. |
   * | Deployed | Deployed. |
   * | Errored | Deployment failed. |
   * | Deleting | Being deleted. |
   * | Deleted | Deleted. |
   * | DeleteFailed | Deletion failed. |
   * 
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
   * @remarks
   * The maximum number of results returned.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. This parameter is empty if no more pages are available.
   * 
   * @example
   * LC4NJL3Ru2bIiRdnbADPQp4dD+2BRJj42DLT6GrZysw=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3E49127A-BB65-5CCD-AB93-0EC0A43E5446
   */
  requestId?: string;
  /**
   * @remarks
   * The list of stacks.
   */
  stacks?: ListStacksResponseBodyStacks[];
  /**
   * @remarks
   * The total number of entries.
   * 
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

