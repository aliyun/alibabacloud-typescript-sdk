// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSyncQualityCheckDataResponseBodyData extends $dara.Model {
  /**
   * @example
   * 123123D8C-5BD9-42A7-B527-1235F8**
   */
  taskId?: string;
  /**
   * @example
   * 20210101-1212121***
   */
  tid?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      tid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

