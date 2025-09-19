// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableBruteForceRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The IP address that you want to specify in the policy.
   * 
   * This parameter is required.
   * 
   * @example
   * 8.210.XX.XX
   */
  blockIp?: string;
  /**
   * @remarks
   * The traffic direction that you want to specify in the policy. Valid values:
   * 
   * *   **in**: inbound
   * *   **out**: outbound
   * 
   * @example
   * in
   */
  bound?: string;
  /**
   * @remarks
   * The ID of the IP address blocking policy.
   * 
   * > You can call the [DescribeBruteForceRecords](~~DescribeBruteForceRecords~~) operation to query the policy ID.
   * 
   * @example
   * 114166XX
   */
  id?: number;
  /**
   * @remarks
   * The port number.
   */
  port?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The UUID of the server.
   * 
   * This parameter is required.
   * 
   * @example
   * cbb9aa80-a8d1-443c-9ff0-2c36cd39****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      blockIp: 'BlockIp',
      bound: 'Bound',
      id: 'Id',
      port: 'Port',
      resourceOwnerId: 'ResourceOwnerId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockIp: 'string',
      bound: 'string',
      id: 'number',
      port: 'string',
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

