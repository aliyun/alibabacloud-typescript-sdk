// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopAIAgentInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The agent instance ID.
   * 
   * 
   * > InstanceId is the unique ID returned after the agent instance is started successfully. For information about how to start an agent instance, see [StartAIAgentInstance](https://help.aliyun.com/document_detail/2846201.html) and [GenerateAIAgentCall](https://help.aliyun.com/document_detail/2846209.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 39f8e0bc005e4f309379701645f4****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

