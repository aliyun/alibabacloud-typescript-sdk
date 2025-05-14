// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EdgeClusterAddEdgeMachineResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud-native box.
   * 
   * @example
   * 0f4bf70a-caff-4b26-a679-fb0188a1****
   */
  edgeMachineId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0adf3a23-6841-41e8-9f55-7b290216c980
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      edgeMachineId: 'edge_machine_id',
      requestId: 'request_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edgeMachineId: 'string',
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

