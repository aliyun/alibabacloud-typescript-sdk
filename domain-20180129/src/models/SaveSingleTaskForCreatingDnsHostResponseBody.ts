// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveSingleTaskForCreatingDnsHostResponseBody extends $dara.Model {
  /**
   * @example
   * 0F1B3547-BE50-4206-8F78-9540FFB85BC1
   */
  requestId?: string;
  /**
   * @example
   * e9b8e8b4-7334-4548-9cec-c30b6891f292
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

