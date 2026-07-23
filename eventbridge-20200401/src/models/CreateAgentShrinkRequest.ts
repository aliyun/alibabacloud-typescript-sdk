// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAgentShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the event bus.
   * 
   * @example
   * 连接配置描述信息
   */
  description?: string;
  /**
   * @remarks
   * The associated metadata.
   */
  metadataShrink?: string;
  /**
   * @remarks
   * The name of the agent.
   * 
   * This parameter is required.
   * 
   * @example
   * my-agent
   */
  name?: string;
  /**
   * @remarks
   * You are an IoT data analytics assistant...
   * 
   * @example
   * 我想要她，你这样增加请求头获取用户IP CF-Connecting-IP%3B
   */
  prompt?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      metadataShrink: 'Metadata',
      name: 'Name',
      prompt: 'Prompt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      metadataShrink: 'string',
      name: 'string',
      prompt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

