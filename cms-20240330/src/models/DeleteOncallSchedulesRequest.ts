// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteOncallSchedulesRequest extends $dara.Model {
  oncallScheduleIds?: string[];
  static names(): { [key: string]: string } {
    return {
      oncallScheduleIds: 'oncallScheduleIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      oncallScheduleIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.oncallScheduleIds)) {
      $dara.Model.validateArray(this.oncallScheduleIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

