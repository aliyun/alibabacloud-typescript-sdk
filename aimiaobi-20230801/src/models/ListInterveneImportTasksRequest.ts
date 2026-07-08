// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInterveneImportTasksRequest extends $dara.Model {
  /**
   * @remarks
   * Unique identifier of the workspace: [AgentKey](https://help.aliyun.com/document_detail/2587494.html)
   * 
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @remarks
   * Page number
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * Page size
   * 
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

