// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentByIdResponseBodyData extends $dara.Model {
  agentId?: number;
  createUserName?: string;
  foreignKey?: string;
  foreignNick?: string;
  realName?: string;
  servicerType?: number;
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

