// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSkillDraftResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response data.
   * 
   * @example
   * skill-1234567890abcdef
   */
  data?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A1B2C3D4-E5F6-47A8-90AB-CDEF12345678
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
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

