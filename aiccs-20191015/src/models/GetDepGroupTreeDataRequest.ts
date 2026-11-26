// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDepGroupTreeDataRequest extends $dara.Model {
  /**
   * @remarks
   * The agent ID.
   * 
   * You can call the [GetAgent](https://www.alibabacloud.com/help/en/aiccs/developer-reference/api-aiccs-2019-10-15-getagent) operation and view the **AgentId** response parameter to obtain the agent ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  agentId?: number;
  /**
   * @remarks
   * The AICCS instance ID.
   * You can obtain the ID in the <b>Instance Management</b> section of the left-side navigation pane in the [Artificial Intelligence Cloud Call Service console](https://aiccs.console.aliyun.com/overview).
   * 
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'number',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

