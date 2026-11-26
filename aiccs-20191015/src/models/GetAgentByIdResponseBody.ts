// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentByIdResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the agent.
   * 
   * @example
   * 123456
   */
  agentId?: number;
  /**
   * @remarks
   * The name of the user who created the agent.
   * 
   * @example
   * Zhang San
   */
  createUserName?: string;
  /**
   * @remarks
   * The external key.
   * 
   * @example
   * 43990666****
   */
  foreignKey?: string;
  /**
   * @remarks
   * The logon name of the agent.
   * 
   * @example
   * 123@123.com
   */
  foreignNick?: string;
  /**
   * @remarks
   * The name of the agent.
   * 
   * @example
   * Liu Ceshi
   */
  realName?: string;
  /**
   * @remarks
   * The service type. Default value: 3.
   * 
   * @example
   * 3
   */
  servicerType?: number;
  /**
   * @remarks
   * The display name of the agent.
   * 
   * @example
   * Liu Ceshi
   */
  showName?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      createUserName: 'CreateUserName',
      foreignKey: 'ForeignKey',
      foreignNick: 'ForeignNick',
      realName: 'RealName',
      servicerType: 'ServicerType',
      showName: 'ShowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'number',
      createUserName: 'string',
      foreignKey: 'string',
      foreignNick: 'string',
      realName: 'string',
      servicerType: 'number',
      showName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentByIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. A value of Success indicates that the request is successful.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The agent information.
   */
  data?: GetAgentByIdResponseBodyData;
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetAgentByIdResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

