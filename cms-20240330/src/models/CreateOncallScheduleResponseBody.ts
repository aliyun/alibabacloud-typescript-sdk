// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOncallScheduleResponseBody extends $dara.Model {
  /**
   * @example
   * testOncallScheduleId
   */
  oncallScheduleId?: string;
  /**
   * @example
   * 3B311FD9-A60B-55E0-A896-A0C73*********
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      oncallScheduleId: 'oncallScheduleId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      oncallScheduleId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

