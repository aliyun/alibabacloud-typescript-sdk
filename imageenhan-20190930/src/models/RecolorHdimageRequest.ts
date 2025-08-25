// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecolorHDImageRequestColorTemplate extends $dara.Model {
  /**
   * @example
   * [3F6A6B,0A0A6F]
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

export class RecolorHDImageRequest extends $dara.Model {
  /**
   * @example
   * 2
   */
  colorCount?: number;
  /**
   * @remarks
   * 1
   */
  colorTemplate?: RecolorHDImageRequestColorTemplate[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.4
   */
  degree?: string;
  /**
   * @example
   * REF_PIC
   */
  mode?: string;
  /**
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/imageenhan/RecolorHDImage/RecolorHDImage-REF_PIC6.jpg
   */
  refUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/imageenhan/RecolorHDImage/RecolorHDImage-auto1.jpg
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      colorCount: 'ColorCount',
      colorTemplate: 'ColorTemplate',
      degree: 'Degree',
      mode: 'Mode',
      refUrl: 'RefUrl',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      colorCount: 'number',
      colorTemplate: { 'type': 'array', 'itemType': RecolorHDImageRequestColorTemplate },
      degree: 'string',
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

