// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RedraftSkillVersionResponseBody extends $dara.Model {
  /**
   * @example
   * 3920CB4B-90A2-5C97-80DA-578517F2C066
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

