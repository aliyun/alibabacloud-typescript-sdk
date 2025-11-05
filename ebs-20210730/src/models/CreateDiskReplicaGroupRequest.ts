// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDiskReplicaGroupRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N of the replication pair-consistent group.
   * 
   * @example
   * tag-key
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N of the replication pair-consistent group.
   * 
   * @example
   * tag-value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDiskReplicaGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The bandwidth value. Unit: Mbit/s.
   * 
   * >  This parameter is not publicly available.
   * 
   * @example
   * 10240
   */
  bandwidth?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotency of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
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
   * The region ID of the secondary site.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  destinationRegionId?: string;
  /**
   * @remarks
   * The zone ID of the secondary site.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai-e
   */
  destinationZoneId?: string;
  /**
   * @remarks
   * Whether to enable replication time control. By default, this parameter is disabled.
   * 
   * @example
   * true
   */
  enableRtc?: boolean;
  /**
   * @remarks
   * The name of the replication pair-consistent group. The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with `http://` or `https://`. The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
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
   * The ID of the region in which to create the replication pair-consistent group. The primary site is deployed in the specified region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the replication pair-consistent group belongs.
   * 
   * @example
   * rg-acfmvs*******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The zone ID of the primary site.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing-f
   */
  sourceZoneId?: string;
  /**
   * @remarks
   * The tags. Up to 20 tags are supported.
   */
  tag?: CreateDiskReplicaGroupRequestTag[];
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      clientToken: 'ClientToken',
      description: 'Description',
      destinationRegionId: 'DestinationRegionId',
      destinationZoneId: 'DestinationZoneId',
      enableRtc: 'EnableRtc',
      groupName: 'GroupName',
      RPO: 'RPO',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      sourceZoneId: 'SourceZoneId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      clientToken: 'string',
      description: 'string',
      destinationRegionId: 'string',
      destinationZoneId: 'string',
      enableRtc: 'boolean',
      groupName: 'string',
      RPO: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      sourceZoneId: 'string',
      tag: { 'type': 'array', 'itemType': CreateDiskReplicaGroupRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

