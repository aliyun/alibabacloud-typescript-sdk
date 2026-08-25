// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVaultReplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the source region. If you do not specify this parameter, the region where the API is called is used.
   * 
   * @example
   * cn-hangzhou
   */
  replicationSourceRegionId?: string;
  /**
   * @remarks
   * The ID of the source backup vault.
   * 
   * This parameter is required.
   * 
   * @example
   * v-*********************
   */
  replicationSourceVaultId?: string;
  /**
   * @remarks
   * The ID of the destination backup vault.
   * 
   * This parameter is required.
   * 
   * @example
   * r-*********************
   */
  replicationTargetVaultId?: string;
  static names(): { [key: string]: string } {
    return {
      replicationSourceRegionId: 'ReplicationSourceRegionId',
      replicationSourceVaultId: 'ReplicationSourceVaultId',
      replicationTargetVaultId: 'ReplicationTargetVaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      replicationSourceRegionId: 'string',
      replicationSourceVaultId: 'string',
      replicationTargetVaultId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

