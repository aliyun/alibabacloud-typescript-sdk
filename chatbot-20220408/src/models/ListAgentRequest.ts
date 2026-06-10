// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the business space. Use this parameter to filter the results.
   * 
   * @example
   * 业务空间_001
   */
  agentName?: string;
  /**
   * @remarks
   * The commodity code. Filters the results to return only business spaces associated with a specific commodity code.
   * 
   * @example
   * G_cloudBeeBot_public
   */
  goodsCodes?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 10.
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

