// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunSyncCommandRequest extends $dara.Model {
  /**
   * @remarks
   * The content of the command to execute.
   * 
   * @example
   * ls
   */
  commandContent?: string;
  /**
   * @remarks
   * The encoding of the command content. If you provide a value that is not a valid option, the system uses the default value, `PlainText`.
   * 
   * @example
   * PlainText
   */
  contentEncoding?: string;
  /**
   * @remarks
   * An array of Cloud Phone instance IDs. You can specify up to 50 instances in a single request.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The timeout for command execution, in milliseconds. Valid range: 500 to 3000. Default: 1000.
   * 
   * @example
   * 1000
   */
  waitTime?: number;
  static names(): { [key: string]: string } {
    return {
      commandContent: 'CommandContent',
      contentEncoding: 'ContentEncoding',
      instanceIds: 'InstanceIds',
      waitTime: 'WaitTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandContent: 'string',
      contentEncoding: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      waitTime: 'number',
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

