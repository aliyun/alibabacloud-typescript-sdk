// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataFlowSubTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the data streaming task.
   * 
   * @example
   * subTaskId-370kyfmyknxcyzw****
   */
  dataFlowSubTaskId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A70BEE5D-76D3-49FB-B58F-1F398211A5C3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataFlowSubTaskId: 'DataFlowSubTaskId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataFlowSubTaskId: 'string',
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

