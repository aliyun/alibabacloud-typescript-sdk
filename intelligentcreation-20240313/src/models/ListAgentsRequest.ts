// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentsRequest extends $dara.Model {
  /**
   * @example
   * 840016700254633984
   */
  agentId?: string;
  /**
   * @example
   * text
   */
  agentScene?: string;
  /**
   * @example
   * SYSTEM
   */
  owner?: string;
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
  /**
   * @example
   * 0
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      agentScene: 'agentScene',
      owner: 'owner',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentScene: 'string',
      owner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

