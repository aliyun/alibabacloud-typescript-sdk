// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SegmentOARResponseBodyData extends $dara.Model {
  maskList?: string[];
  /**
   * @example
   * http://vibktprfx-prod-prod-aic-med-cn-shanghai.oss-cn-shanghai.aliyuncs.com/calc-cacs/2020-09-29/2020-09-29-11%3A07%3A41-D74FE0DF-8F80-41EB-B08B-2E67053587EC.tar.gz?Expires=1601350661&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=iB16ms28Y5mzB11ghYUd7upCi4****
   */
  resultURL?: string;
  static names(): { [key: string]: string } {
    return {
      maskList: 'MaskList',
      resultURL: 'ResultURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maskList: { 'type': 'array', 'itemType': 'string' },
      resultURL: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.maskList)) {
      $dara.Model.validateArray(this.maskList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

