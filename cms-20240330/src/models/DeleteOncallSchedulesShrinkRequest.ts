// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteOncallSchedulesShrinkRequest extends $dara.Model {
  oncallScheduleIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      oncallScheduleIdsShrink: 'oncallScheduleIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      oncallScheduleIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

