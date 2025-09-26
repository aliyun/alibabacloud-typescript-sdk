// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentRuntimesInput extends $dara.Model {
  /**
   * @remarks
   * 按名称过滤
   */
  agentRuntimeName?: string;
  /**
   * @remarks
   * 页码
   */
  pageNumber?: number;
  /**
   * @remarks
   * 每页记录数
   */
  pageSize?: number;
  /**
   * @remarks
   * 按状态过滤
   */
  statuses?: string[];
  static names(): { [key: string]: string } {
    return {
      agentRuntimeName: 'agentRuntimeName',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      statuses: 'statuses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentRuntimeName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      statuses: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.statuses)) {
      $dara.Model.validateArray(this.statuses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

