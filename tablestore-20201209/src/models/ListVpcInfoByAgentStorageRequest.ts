// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVpcInfoByAgentStorageRequest extends $dara.Model {
  /**
   * @remarks
   * The agent storage name.
   * 
   * This parameter is required.
   * 
   * @example
   * agent-test
   */
  agentStorageName?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of VPCs per page for the query.
   * 
   * @example
   * 8
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      agentStorageName: 'AgentStorageName',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentStorageName: 'string',
      pageNum: 'number',
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

