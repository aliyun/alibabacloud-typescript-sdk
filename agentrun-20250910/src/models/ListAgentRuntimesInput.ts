// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentRuntimesInput extends $dara.Model {
  /**
   * @remarks
   * Filters the results by agent runtime name.
   * 
   * @example
   * my-agent-runtime
   */
  agentRuntimeName?: string;
  /**
   * @remarks
   * The page number for pagination.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The maximum number of results to return per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Filters the results by status.
   * 
   * @example
   * READY,CREATING
   */
  statuses?: string[];
  /**
   * @remarks
   * 按系统标签过滤
   * 
   * @example
   * acs:ecs:tag1,acs:ecs:tag2
   */
  systemTags?: string[];
  static names(): { [key: string]: string } {
    return {
      agentRuntimeName: 'agentRuntimeName',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      statuses: 'statuses',
      systemTags: 'systemTags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentRuntimeName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      statuses: { 'type': 'array', 'itemType': 'string' },
      systemTags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.statuses)) {
      $dara.Model.validateArray(this.statuses);
    }
    if(Array.isArray(this.systemTags)) {
      $dara.Model.validateArray(this.systemTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

