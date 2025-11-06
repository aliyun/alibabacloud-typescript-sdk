// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveSingleTaskForCreatingOrderRedeemResponseBody extends $dara.Model {
  /**
   * @example
   * 40F46D3D-F4F3-4CCB-AC30-2DD20E32E528
   */
  requestId?: string;
  /**
   * @example
   * 3cb1adc3-20e8-44ae-9e76-e812fa6fc9d8
   */
  taskNo?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskNo: 'TaskNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

