// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentRuntimesInput extends $dara.Model {
  /**
   * @remarks
   * 按名称过滤
   * 
   * @example
   * my-agent-runtime
   */
  agentRuntimeName?: string;
  /**
   * @remarks
   * 页码
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * 每页记录数
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * 按状态过滤
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

