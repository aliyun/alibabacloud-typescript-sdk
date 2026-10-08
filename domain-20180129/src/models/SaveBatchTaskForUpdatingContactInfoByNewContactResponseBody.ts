// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveBatchTaskForUpdatingContactInfoByNewContactResponseBody extends $dara.Model {
  /**
   * @remarks
   * Unique request access token.
   * 
   * @example
   * 464AF466-CA8E-43A8-B61D-test
   */
  requestId?: string;
  /**
   * @remarks
   * Job number.
   * 
   * @example
   * 65de2165-ca09-491f-9fe0-test
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

