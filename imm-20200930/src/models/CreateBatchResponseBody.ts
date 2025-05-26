// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBatchResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the batch processing task.
   * 
   * @example
   * batch-4eb9223f-3e88-42d3-a578-3f2852******
   */
  id?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EC564A9A-BA5C-4499-A087-D9B9E76E*****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

