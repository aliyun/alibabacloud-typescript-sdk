// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The business space key. If not specified, the default business space is accessed. Obtain the key value from the business management page of the Alibaba Cloud account.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * Performs a fuzzy match by chatbot name.
   * 
   * @example
   * Pre-sales Customer Service
   */
  name?: string;
  /**
   * @remarks
   * The page number for pagination. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Filters chatbots by type.
   * 
   * @example
   * scenario_im
   */
  robotType?: string;
  sandbox?: boolean;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      robotType: 'RobotType',
      sandbox: 'Sandbox',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      robotType: 'string',
      sandbox: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

