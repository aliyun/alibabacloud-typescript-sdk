// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunCommandRequest extends $dara.Model {
  /**
   * @remarks
   * The channel type for running the command.
   * 
   * @example
   * EdsAgent
   */
  agentType?: string;
  /**
   * @remarks
   * The content of the command.
   * 
   * @example
   * ls
   */
  commandContent?: string;
  /**
   * @remarks
   * The encoding method for the command content (`CommandContent`). This value is not case-sensitive.
   * 
   * > An invalid value defaults to `PlainText`.
   * 
   * @example
   * PlainText
   */
  contentEncoding?: string;
  /**
   * @remarks
   * A list of instance IDs. You can specify up to 50 instances per request.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The execution timeout in seconds. The command times out if it does not complete within this period. Defaults to 60 seconds.
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

