// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Dataset } from "./Dataset";


export class UpdateDatasetResponseBody extends $dara.Model {
  /**
   * @remarks
   * 数据集。
   */
  dataset?: Dataset;
  /**
   * @remarks
   * 请求ID。
   * 
   * @example
   * 45234D4A-A3E3-4B23-AACA-8D897514****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataset: 'Dataset',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataset: Dataset,
      requestId: 'string',
    };
  }

  validate() {
    if(this.dataset && typeof (this.dataset as any).validate === 'function') {
      (this.dataset as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

