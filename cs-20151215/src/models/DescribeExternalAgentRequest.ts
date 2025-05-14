// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExternalAgentRequest extends $dara.Model {
  /**
   * @remarks
   * The permission mode of the agent. Valid values:
   * 
   * admin: the admin mode, which provides full permissions. restricted: the restricted mode, which provides partial permissions. Default value: admin.
   * 
   * @example
   * admin
   */
  agentMode?: string;
  /**
   * @remarks
   * Specifies whether to obtain the credentials that are used to access the cluster over the internal network.
   * 
   * *   `true`: obtains the credentials that are used to access the cluster over the internal network.
   * *   `false`: obtains the credentials that are used to access the cluster over the Internet.
   * 
   * Default value: `false`.
   * 
   * @example
   * true
   */
  privateIpAddress?: string;
  static names(): { [key: string]: string } {
    return {
      agentMode: 'AgentMode',
      privateIpAddress: 'PrivateIpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentMode: 'string',
      privateIpAddress: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

