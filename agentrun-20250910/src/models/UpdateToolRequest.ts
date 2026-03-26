// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateToolInputV2 } from "./UpdateToolInputV2";


export class UpdateToolRequest extends $dara.Model {
  /**
   * @remarks
   * 更新工具的请求参数，只需提供需要修改的字段
   */
  body?: UpdateToolInputV2;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: UpdateToolInputV2,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

