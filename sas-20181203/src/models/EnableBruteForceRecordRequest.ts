// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableBruteForceRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The IP address that is specified in the policy.
   * 
   * This parameter is required.
   * 
   * @example
   * 61.155.XX.XX
   */
  blockIp?: string;
  /**
   * @remarks
   * The traffic direction that is specified in the policy. Valid values:
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
   * The ID of the policy that you want to enable.
   * 
   * > You can call the [DescribeBruteForceRecords](~~DescribeBruteForceRecords~~) operation to query the IDs of policies.
   * 
   * @example
   * 116602XX
   */
  id?: number;
  /**
   * @remarks
   * The port number.
   * 
   * @example
   * 22/22
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
   * 71046acb-8bff-4c3b-9163-24deb007****
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

