// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddImageResponseBody extends $dara.Model {
  /**
   * @example
   * m-bp1akkkr1rkxtb******
   */
  imageId?: string;
  /**
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
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

