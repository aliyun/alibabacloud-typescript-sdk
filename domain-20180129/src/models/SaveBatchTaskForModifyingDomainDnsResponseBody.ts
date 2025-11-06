// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveBatchTaskForModifyingDomainDnsResponseBody extends $dara.Model {
  /**
   * @example
   * 6A862A8A-E7AB-4C4E-8946-A74122D9CC4B
   */
  requestId?: string;
  /**
   * @example
   * 35fb2fb7-d4d6-4478-9408-22cb63696b86
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

