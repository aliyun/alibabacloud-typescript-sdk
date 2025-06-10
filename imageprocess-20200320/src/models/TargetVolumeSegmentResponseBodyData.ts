// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TargetVolumeSegmentResponseBodyData extends $dara.Model {
  /**
   * @example
   * http://vibktprfx-prod-prod-med-eas-cn-shanghai.oss-cn-shanghai.aliyuncs.com/seg-organ-ct/2023-01-31/13%3A59%3A57/286304994262646784.nii.gz?Expires=1675146629&amp;OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&amp;Signature=L7jGtdydjfaFxQQCwqe4q4hlHz****
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

