// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInterveneCntRequest extends $dara.Model {
  /**
   * @remarks
   * Unique identifier of the workspace: [AgentKey](https://help.aliyun.com/document_detail/2587494.html)
   * 
   * This parameter is required.
   * 
   * @example
   * fcb14f25c9ee41ccad33a049de8f941b_p_outbound_public
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
   * 10
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

