// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableCustomBlockRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The IP address that is specified in the policy.
   * 
   * This parameter is required.
   * 
   * @example
   * 43.248.XX.XX
   */
  blockIp?: string;
  /**
   * @remarks
   * The traffic direction that is specified in the policy. Valid values:
   * 
   * *   **in**: inbound
   * *   **out**: outbound
   * 
   * This parameter is required.
   * 
   * @example
   * in
   */
  bound?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      blockIp: 'BlockIp',
      bound: 'Bound',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockIp: 'string',
      bound: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

