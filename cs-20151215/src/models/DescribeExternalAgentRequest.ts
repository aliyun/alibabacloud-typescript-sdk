// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExternalAgentRequest extends $dara.Model {
  /**
   * @remarks
   * The permission mode of the agent. Valid values:
   * 
   * admin: administrator mode with full permissions.
   * restricted: restricted mode with limited permissions.
   * Default value: admin.
   * 
   * @example
   * admin
   */
  agentMode?: string;
  /**
   * @remarks
   * Specifies whether to obtain internal network access credentials.
   * 
   * - `true`: obtains only internal network connection credentials.
   * - `false`: obtains only public network connection credentials.
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

