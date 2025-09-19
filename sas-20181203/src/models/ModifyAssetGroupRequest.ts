// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAssetGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the new server group to which the servers belong.
   * 
   * > You can call the [DescribeAllGroups](~~DescribeAllGroups~~) operation to query the IDs of server groups.
   * 
   * This parameter is required.
   * 
   * @example
   * 9586199
   */
  groupId?: number;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 10.12.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The UUIDs of the servers for which you want to change the server group. Separate multiple UUIDs with commas (,).
   * 
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

