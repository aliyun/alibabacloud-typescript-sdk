// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTempDownloadUrlRequest extends $dara.Model {
  /**
   * @remarks
   * The business ID.
   * 
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  /**
   * @remarks
   * The OSS object key.
   * 
   * @example
   * backend/detection/objects/r-0008ujvfksltf5j45n81/task-000hckiuwyau0gwn17vq.jpg
   */
  ossKey?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      ossKey: 'OssKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      ossKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

