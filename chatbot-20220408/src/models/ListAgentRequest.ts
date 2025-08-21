// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentRequest extends $dara.Model {
  agentName?: string;
  goodsCodes?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      agentName: 'AgentName',
      goodsCodes: 'GoodsCodes',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentName: 'string',
      goodsCodes: 'string',
      pageNumber: 'number',
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

