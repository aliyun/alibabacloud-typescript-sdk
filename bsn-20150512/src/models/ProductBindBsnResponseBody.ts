// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ProductBindBsnResponseBodyDatas extends $dara.Model {
  bsnDO?: string[];
  static names(): { [key: string]: string } {
    return {
      bsnDO: 'bsnDO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bsnDO: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.bsnDO)) {
      $dara.Model.validateArray(this.bsnDO);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProductBindBsnResponseBody extends $dara.Model {
  datas?: ProductBindBsnResponseBodyDatas;
  /**
   * @example
   * 21ED07AF-267E-5820-AEE5-53C973BFD5F8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      datas: 'datas',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datas: ProductBindBsnResponseBodyDatas,
      requestId: 'string',
    };
  }

  validate() {
    if(this.datas && typeof (this.datas as any).validate === 'function') {
      (this.datas as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

