// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MaterialInspectionRequest extends $dara.Model {
  /**
   * @example
   * fb0012f49b004f889207a3c5e6ef8da9
   */
  apiId?: string;
  /**
   * @example
   * https://example.com/reference.jpg
   */
  imageRefer?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://example.com/store.jpg
   */
  imageUrl?: string;
  /**
   * @example
   * req-2026-06-04-001
   */
  reqId?: string;
  /**
   * @example
   * 门型展架必须摆放在入口区域；功能台卡必须摆放在中柜台面
   */
  rules?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      imageRefer: 'ImageRefer',
      imageUrl: 'ImageUrl',
      reqId: 'ReqId',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      imageRefer: 'string',
      imageUrl: 'string',
      reqId: 'string',
      rules: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

