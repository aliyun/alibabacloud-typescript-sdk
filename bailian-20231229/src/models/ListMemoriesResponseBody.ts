// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMemoriesResponseBodyMemories extends $dara.Model {
  /**
   * @remarks
   * The description of the long-term memory.
   * 
   * @example
   * 我的大模型应用$APP_ID关于A用户的长期记忆体
   */
  description?: string;
  /**
   * @remarks
   * The long-term memory ID.
   * 
   * @example
   * 3fc531f4519444beaafffa4538f6xxxx
   */
  memoryId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      memoryId: 'memoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      memoryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMemoriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of long-term memory entities per page in a paged query.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The long-term memory entity list.
   */
  memories?: ListMemoriesResponseBodyMemories[];
  /**
   * @remarks
   * The pagination token returned in this call.
   * 
   * @example
   * dc270401186b433f975d7e1faaa3xxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6a71f2d9-f1c9-913b-818b-11402910xxxx
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 105
   */
  totalCount?: number;
  /**
   * @remarks
   * The ID of the workspace to which the long-term memory entity list belongs.
   * 
   * @example
   * llm-3z7uw7fwz0vexxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      memories: 'memories',
      nextToken: 'nextToken',
      requestId: 'requestId',
      totalCount: 'totalCount',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      memories: { 'type': 'array', 'itemType': ListMemoriesResponseBodyMemories },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.memories)) {
      $dara.Model.validateArray(this.memories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

