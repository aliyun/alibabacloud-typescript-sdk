// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunCommandRequest extends $dara.Model {
  /**
   * @remarks
   * The channel type used to execute the command.
   * 
   * @example
   * EdsAgent
   */
  agentType?: string;
  /**
   * @remarks
   * The command content.
   * 
   * @example
   * ls
   */
  commandContent?: string;
  /**
   * @remarks
   * The encoding method of the command content (`CommandContent`). This parameter is case-insensitive.
   * 
   * > If the specified value is not within the valid values, it is processed as `PlainText`.
   * 
   * @example
   * PlainText
   */
  contentEncoding?: string;
  /**
   * @remarks
   * The list of instance IDs. A single request supports up to 50 instances.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The timeout period. Unit: seconds. If the command is not completed within this period, the command execution status is set to timeout. If this parameter is not specified, the default value is 60 seconds.
   * 
   * @example
   * 60
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      agentType: 'AgentType',
      commandContent: 'CommandContent',
      contentEncoding: 'ContentEncoding',
      instanceIds: 'InstanceIds',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentType: 'string',
      commandContent: 'string',
      contentEncoding: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      timeout: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

