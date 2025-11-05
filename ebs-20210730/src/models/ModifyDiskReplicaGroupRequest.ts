// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDiskReplicaGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The bandwidth value. Unit: Kbit/s.
   * 
   * >  This parameter is not publicly available.
   * 
   * @example
   * -
   */
  bandwidth?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the replication pair-consistent group. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * This is description.
   */
  description?: string;
  /**
   * @remarks
   * Whether to enable replication time control.
   * 
   * @example
   * true
   */
  enableRtc?: boolean;
  /**
   * @remarks
   * The name of the replication pair-consistent group. The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with `http://` or `https://`. It can contain letters, digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * myreplicagrouptest
   */
  groupName?: string;
  /**
   * @remarks
   * The RPO of the replication pair-consistent group. Unit: seconds. Valid value: 900.
   * 
   * @example
   * 900
   */
  RPO?: number;
  /**
   * @remarks
   * The region ID of the replication pair-consistent group.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the replication pair-consistent group. You can call the [DescribeDiskReplicaGroups](https://help.aliyun.com/document_detail/426614.html) operation to query the IDs of replication pair-consistent groups.
   * 
   * This parameter is required.
   * 
   * @example
   * pg-myreplica****
   */
  replicaGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      clientToken: 'ClientToken',
      description: 'Description',
      enableRtc: 'EnableRtc',
      groupName: 'GroupName',
      RPO: 'RPO',
      regionId: 'RegionId',
      replicaGroupId: 'ReplicaGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      clientToken: 'string',
      description: 'string',
      enableRtc: 'boolean',
      groupName: 'string',
      RPO: 'number',
      regionId: 'string',
      replicaGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

