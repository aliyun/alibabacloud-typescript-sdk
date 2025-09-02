// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateManualDagResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the DAG for the manually triggered workflow. You can call an operation with this parameter as a request parameter to query the details and states of the nodes in the manually triggered workflow.
   * 
   * @example
   * 700000123123141
   */
  dagId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AASFDFSDFG-DFSDF-DFSDFD-SDFSDF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dagId: 'DagId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dagId: 'number',
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

