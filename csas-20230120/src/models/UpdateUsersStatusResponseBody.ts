// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUsersStatusResponseBody extends $dara.Model {
  /**
   * @example
   * 47363C2B-1AAA-5954-8847-0E50FCC54117
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

