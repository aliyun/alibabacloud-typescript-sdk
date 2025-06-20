// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SafeChangeCheckRequestChangeTimes extends $dara.Model {
  changeEndTime?: number;
  changeStartTime?: number;
  static names(): { [key: string]: string } {
    return {
      changeEndTime: 'ChangeEndTime',
      changeStartTime: 'ChangeStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeEndTime: 'number',
      changeStartTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

