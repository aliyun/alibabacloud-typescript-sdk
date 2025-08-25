// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class RecolorImageAdvanceRequestColorTemplate extends $dara.Model {
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

export class RecolorImageAdvanceRequest extends $dara.Model {
  /**
   * @example
   * 3
   */
  colorCount?: number;
  /**
   * @remarks
   * 1
   */
  colorTemplate?: RecolorImageAdvanceRequestColorTemplate[];
  /**
   * @example
   * TEMPLATE
   */
  mode?: string;
  /**
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/imageenhan/RecolorImage/RecolorImage-REF_PIC7.jpg
   */
  refUrlObject?: Readable;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/imageenhan/RecolorImage/RecolorImage-REF_PIC1.jpg
   */
  urlObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      colorCount: 'ColorCount',
      colorTemplate: 'ColorTemplate',
      mode: 'Mode',
      refUrlObject: 'RefUrl',
      urlObject: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      colorCount: 'number',
      colorTemplate: { 'type': 'array', 'itemType': RecolorImageAdvanceRequestColorTemplate },
      mode: 'string',
      refUrlObject: 'Readable',
      urlObject: 'Readable',
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

