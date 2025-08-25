// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecolorImageRequestColorTemplate extends $dara.Model {
  /**
   * @example
   * 056A6B
   */
  color?: string;
  static names(): { [key: string]: string } {
    return {
      color: 'Color',
    };
  }

  static types(): { [key: string]: any } {
    return {
      color: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecolorImageRequest extends $dara.Model {
  /**
   * @example
   * 3
   */
  colorCount?: number;
  /**
   * @remarks
   * 1
   */
  colorTemplate?: RecolorImageRequestColorTemplate[];
  /**
   * @example
   * TEMPLATE
   */
  mode?: string;
  /**
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/imageenhan/RecolorImage/RecolorImage-REF_PIC7.jpg
   */
  refUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/imageenhan/RecolorImage/RecolorImage-REF_PIC1.jpg
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      colorCount: 'ColorCount',
      colorTemplate: 'ColorTemplate',
      mode: 'Mode',
      refUrl: 'RefUrl',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      colorCount: 'number',
      colorTemplate: { 'type': 'array', 'itemType': RecolorImageRequestColorTemplate },
      mode: 'string',
      refUrl: 'string',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.colorTemplate)) {
      $dara.Model.validateArray(this.colorTemplate);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

