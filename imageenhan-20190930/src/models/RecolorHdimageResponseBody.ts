// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecolorHDImageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 1
   */
  imageList?: string[];
  static names(): { [key: string]: string } {
    return {
      imageList: 'ImageList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.imageList)) {
      $dara.Model.validateArray(this.imageList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecolorHDImageResponseBody extends $dara.Model {
  data?: RecolorHDImageResponseBodyData;
  message?: string;
  /**
   * @example
   * 9364CEB1-1C39-489F-B6DB-6E65577429F1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RecolorHDImageResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

