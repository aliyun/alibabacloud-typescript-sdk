// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentRequest extends $dara.Model {
  /**
   * @remarks
   * The business space name. You can use this parameter to search by name.
   * 
   * @example
   * BusinessSpace_001
   */
  agentName?: string;
  /**
   * @remarks
   * The commodity code. You can use this parameter to filter by commodity code and query instance information.
   * 
   * @example
   * G_cloudBeeBot_public
   */
  goodsCodes?: string;
  /**
   * @remarks
   * The current page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records per page in the response. Maximum value: 100. Default value: 10.
   * 
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

