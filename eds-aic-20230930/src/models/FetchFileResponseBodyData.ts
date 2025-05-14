// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FetchFileResponseBodyData extends $dara.Model {
  androidInstanceId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      androidInstanceId: 'AndroidInstanceId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

