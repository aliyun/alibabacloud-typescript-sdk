// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunSyncCommandRequest extends $dara.Model {
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
   * The encoding method of the script content. If the specified value is not within the valid values, the default value `PlainText` is used.
   * 
   * @example
   * PlainText
   */
  contentEncoding?: string;
  /**
   * @remarks
   * The list of cloud phone instance IDs. A single request supports up to 50 instances.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The wait time in milliseconds. Valid values: 500 to 3000. Default value: 1000.
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

