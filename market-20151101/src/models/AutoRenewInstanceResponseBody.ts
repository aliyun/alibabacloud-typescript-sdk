// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AutoRenewInstanceResponseBody extends $dara.Model {
  data?: boolean;
  /**
   * @example
   * 2D29E31F-73C7-4E82-8A44-035E39DCB601
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

