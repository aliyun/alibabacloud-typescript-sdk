// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetectFaceAttributesRequest extends $dara.Model {
  /**
   * @remarks
   * The business scenario identifier for the ID Verification service.
   * 
   * @example
   * RPBasicTest
   */
  bizType?: string;
  /**
   * @remarks
   * The photo to be detected. For format details, see the notes on uploading image addresses. A maximum of 5 faces can be detected in a single image.
   * 
   * This parameter is required.
   * 
   * @example
   * http://image-demo.img-cn-hangzhou.aliyuncs.com/example.jpg
   */
  materialValue?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      materialValue: 'MaterialValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      materialValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

