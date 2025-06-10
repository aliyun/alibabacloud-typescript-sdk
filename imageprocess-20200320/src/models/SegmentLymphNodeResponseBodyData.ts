// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SegmentLymphNodeResponseBodyData extends $dara.Model {
  /**
   * @example
   * http://vibktprfx-prod-prod-med-eas-cn-shanghai.oss-cn-shanghai.aliyuncs.com/seg-organ-ct/2023-03-06/18%3A03%3A28/286574099408093190.nii.gz?Expires=1678098808&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=jsPwP7rg4orZQFC6USE3JUOJcS****
   */
  resultURL?: string;
  static names(): { [key: string]: string } {
    return {
      resultURL: 'ResultURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultURL: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

