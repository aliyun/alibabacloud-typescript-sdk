// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAssetGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the new group to which you want to assign the servers.
   * > You can call the [DescribeAllGroups](~~DescribeAllGroups~~) operation to query the group IDs of servers.
   * 
   * This parameter is required.
   * 
   * @example
   * 9586199
   */
  groupId?: number;
  /**
   * @remarks
   * The IP address of the access source.
   * 
   * @example
   * 10.12.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The UUIDs of the servers whose group you want to modify. Separate multiple UUIDs with commas (,).
   * > You can call the [DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~) operation to query the UUIDs of servers.
   * 
   * This parameter is required.
   * 
   * @example
   * 076a446d-df7d-424c-bdc5-bb5dc7f1****
   */
  uuids?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      sourceIp: 'SourceIp',
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      sourceIp: 'string',
      uuids: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

