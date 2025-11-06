// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveTaskForSubmittingDomainDeleteResponseBody extends $dara.Model {
  /**
   * @example
   * 23C9B3C4-9E2C-4405-A88D-BD33E459D140
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

