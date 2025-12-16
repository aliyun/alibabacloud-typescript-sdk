// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVaultReplicationRequest extends $dara.Model {
  /**
   * @example
   * cn-hangzhou
   */
  replicationSourceRegionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * v-*********************
   */
  replicationSourceVaultId?: string;
  /**
   * @remarks
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

