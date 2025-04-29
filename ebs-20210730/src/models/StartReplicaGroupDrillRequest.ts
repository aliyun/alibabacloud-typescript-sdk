// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartReplicaGroupDrillRequest extends $dara.Model {
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
   * The ID of the replication pair-consistent group ID. You can call the [DescribeDiskReplicaGroups](https://help.aliyun.com/document_detail/426614.html) operation the most recent list of async replication pair-consistent groups, including group IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * pg-xxxx
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the region where the secondary site in the replication pair-consistent group is located. You can call the [DescribeDiskReplicaGroups](https://help.aliyun.com/document_detail/426614.html) operation to query the region where the secondary site in the replication pair-consistent group is located.
   * 
   * >  You must enable the disaster recovery drill feature in the region in which the secondary site resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      groupId: 'GroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      groupId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

