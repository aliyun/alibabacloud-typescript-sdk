// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceRequest extends $dara.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @example
   * scenario_im
   */
  name?: string;
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
   * scenario_im
   */
  robotType?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      robotType: 'RobotType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      robotType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

