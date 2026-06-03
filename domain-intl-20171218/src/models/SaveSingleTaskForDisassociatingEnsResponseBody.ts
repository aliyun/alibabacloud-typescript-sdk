// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveSingleTaskForDisassociatingEnsResponseBody extends $dara.Model {
  /**
   * @example
   * A9C35C47-3366-482E-B872-8C9EA4733FE9
   */
  requestId?: string;
  /**
   * @example
   * 561bc091-f16f-4132-8d63-f15edce45731
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

