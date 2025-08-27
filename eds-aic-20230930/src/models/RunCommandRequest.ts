// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunCommandRequest extends $dara.Model {
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
   * The encoding method of the command content (`CommandContent`). The value is not case-sensitive.
   * 
   * >  If you set the value to an invalid encoding method, the system will process the command content as `PlainText`.
   * 
   * Valid values:
   * 
   * *   Base64: encodes the command content in Base64.
   * *   PlainText (default): does not encode the command content. The command content is input as plain text.
   * 
   * @example
   * PlainText
   */
  contentEncoding?: string;
  /**
   * @remarks
   * The IDs of the cloud phone instances. You can specify a maximum of 50 cloud phone instances.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The timeout period of the command execution. If the command execution exceeds the timeout period, it will be considered timed out. If you leave this parameter empty, it defaults to 60.
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

