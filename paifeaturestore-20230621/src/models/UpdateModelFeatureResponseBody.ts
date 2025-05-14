// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateModelFeatureResponseBody extends $dara.Model {
  /**
   * @example
   * C33E160C-BFCA-5719-B958-942850E949F6
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

