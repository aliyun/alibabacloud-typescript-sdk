// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class GetBsnByResourceResponseBodyDatas extends $dara.Model {
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

export class GetBsnByResourceResponseBody extends $dara.Model {
  datas?: GetBsnByResourceResponseBodyDatas;
  static names(): { [key: string]: string } {
    return {
      datas: 'datas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datas: GetBsnByResourceResponseBodyDatas,
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

