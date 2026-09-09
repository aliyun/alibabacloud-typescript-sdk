// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeComfyTaskWaitingQueueRequest extends $dara.Model {
  /**
   * @remarks
   * The waiting queue information of a specified Hive.
   * 
   * @example
   * hive-26cd567b35c04a0a90f0xxxxx
   */
  hiveId?: string;
  static names(): { [key: string]: string } {
    return {
      hiveId: 'HiveId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hiveId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

