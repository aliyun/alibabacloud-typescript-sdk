// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInspectionScheduleResponseBody extends $dara.Model {
  /**
   * @example
   * AD7E16AA-6B23-43BF-979C-07D957FB****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

