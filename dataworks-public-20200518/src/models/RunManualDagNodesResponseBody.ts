// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunManualDagNodesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the dagrun for the manual workflow. You can use this DagId with the corresponding API operation to query the details and status of internal node instances for this manual workflow run.
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

