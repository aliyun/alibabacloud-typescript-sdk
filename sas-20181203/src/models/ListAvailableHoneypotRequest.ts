// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAvailableHoneypotRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the management node to which the honeypot is deployed.
   * 
   * @example
   * 4341018b-8e01-43f6-b1d2-af29a2a4****
   */
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

