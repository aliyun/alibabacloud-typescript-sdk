// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetectFaceAttributesRequest extends $dara.Model {
  /**
   * @remarks
   * The business scenario identifier for ID Verification.
   * 
   * @example
   * RPBasicTest
   */
  bizType?: string;
  /**
   * @remarks
   * The photo to be detected. For the format description, see the image URL description. A maximum of five faces in the same image can be detected.
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

