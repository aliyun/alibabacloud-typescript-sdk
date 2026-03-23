// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunSyncCommandRequest extends $dara.Model {
  /**
   * @example
   * ls
   */
  commandContent?: string;
  /**
   * @example
   * PlainText
   */
  contentEncoding?: string;
  instanceIds?: string[];
  /**
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

