// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobExecutionProgressResponseBodyDataShardingProgressStatusType extends $dara.Model {
  /**
   * @example
   * 5
   */
  code?: string;
  /**
   * @example
   * TaskStatus.FAILED
   */
  name?: string;
  /**
   * @remarks
   * -
   */
  tips?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
      tips: 'Tips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
      tips: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.tips) {
      $dara.Model.validateMap(this.tips);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

