// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateManualDagResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the DAG generated when the manual workflow runs. You can use this DagId together with the relevant API to query the details and status of the internal node instances of this manual workflow run.
   * 
   * @example
   * 700000123123141
   */
  dagId?: number;
  /**
   * @remarks
   * The unique ID of the request.
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

