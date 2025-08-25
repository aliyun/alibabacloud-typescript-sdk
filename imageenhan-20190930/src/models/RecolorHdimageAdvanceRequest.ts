// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class RecolorHDImageAdvanceRequestColorTemplate extends $dara.Model {
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

export class RecolorHDImageAdvanceRequest extends $dara.Model {
  /**
   * @example
   * 2
   */
  colorCount?: number;
  /**
   * @remarks
   * 1
   */
  colorTemplate?: RecolorHDImageAdvanceRequestColorTemplate[];
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
  refUrlObject?: Readable;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/imageenhan/RecolorHDImage/RecolorHDImage-auto1.jpg
   */
  urlObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      colorCount: 'ColorCount',
      colorTemplate: 'ColorTemplate',
      degree: 'Degree',
      mode: 'Mode',
      refUrlObject: 'RefUrl',
      urlObject: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      colorCount: 'number',
      colorTemplate: { 'type': 'array', 'itemType': RecolorHDImageAdvanceRequestColorTemplate },
      degree: 'string',
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

