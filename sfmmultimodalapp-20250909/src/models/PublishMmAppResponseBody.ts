// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublishMmAppResponseBody extends $dara.Model {
  /**
   * @example
   * xxxxx
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

