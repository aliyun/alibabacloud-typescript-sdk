// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEdgeMachineResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud-native box.
   * 
   * @example
   * cc0725ddf688744979cd98445f67e****
   */
  edgeMachineId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * "request_id": "6e7b377a-c5ed-4388-8026-689e1b34****",
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

