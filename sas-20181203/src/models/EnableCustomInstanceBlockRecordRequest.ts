// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableCustomInstanceBlockRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The IP address that you want to block.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.xx.xx
   */
  blockIp?: string;
  /**
   * @remarks
   * The traffic direction from the IP address that you want to block. Valid value:
   * 
   * *   **in**
   * *   **out**
   * 
   * @example
   * in
   */
  bound?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The UUID of the server.
   * 
   * This parameter is required.
   * 
   * @example
   * 50d213b4-3a35-427a-b8a5-04b0c7e1****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      blockIp: 'BlockIp',
      bound: 'Bound',
      resourceOwnerId: 'ResourceOwnerId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockIp: 'string',
      bound: 'string',
      resourceOwnerId: 'number',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

