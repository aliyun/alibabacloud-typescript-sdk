// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateManualDagResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the dagrun for the manual business process. You can use this DagId with the corresponding operation to query the detailed information and status of the internal node instances of this manual business process execution.
   * 
   * @example
   * 700000123123141
   */
  dagId?: number;
  /**
   * @remarks
   * The unique request ID.
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

