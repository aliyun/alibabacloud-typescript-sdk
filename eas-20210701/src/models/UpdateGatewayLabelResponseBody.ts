// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGatewayLabelResponseBody extends $dara.Model {
  /**
   * @example
   * Succeed to update gateway gw-1uhcqmsc7x22****** labels.
   */
  message?: string;
  /**
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
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

