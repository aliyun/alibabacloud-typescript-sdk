// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAIAgentInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AI agent that you want to query.
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

