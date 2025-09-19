// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTagWithUuidRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the asset to query. If you do not specify this parameter, the tags of all asset types are queried. Valid values:
   * 
   * *   **ecs**: server
   * *   **cloud_product**: Alibaba Cloud service
   * 
   * @example
   * ecs
   */
  machineTypes?: string;
  /**
   * @remarks
   * The ID of the tag that you want to manage.
   * 
   * >  You can call the [DescribeGroupedTags](~~DescribeGroupedTags~~) operation to query the IDs of tags.
   * 
   * @example
   * 3897941
   */
  tagId?: string;
  /**
   * @remarks
   * The names of the tags that you want to manage. Separate multiple tag names with commas (,).
   * 
   * >  You can call the [DescribeGroupedTags](~~DescribeGroupedTags~~) operation to query the names of tags.
   * 
   * This parameter is required.
   * 
   * @example
   * ac,ad
   */
  tagList?: string;
  /**
   * @remarks
   * The details of the server for which you want to manage the tag. The value of this parameter is in the JSON format and contains the following fields:
   * 
   * *   **Target**: the UUID of the server that you want to add or remove.
   * 
   * *   **targetType**: the method by which the server is added. Valid values:
   * 
   *     *   **uuid**: by server
   *     *   **groupId**: by server group
   * 
   * *   **flag**: the operation that you want to perform on the server. Valid values:
   * 
   *     *   **del**: removes the tag from the server.
   *     *   **add**: adds the tag to the server.
   * 
   * @example
   * [{"target":"inet-7c676676-06fa-442e-90fb-b802e5d6****","targetType":"uuid","flag":"add"}]
   */
  target?: string;
  /**
   * @remarks
   * The UUIDs of the servers.
   * 
   * >  You can call the [DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~) operation to query the UUIDs of servers.
   * 
   * @example
   * e2737dc3-78f4-4653-a986-dc5fad4b****,c189f0e3-df22-42d5-a73d-02c05667****
   */
  uuidList?: string;
  static names(): { [key: string]: string } {
    return {
      machineTypes: 'MachineTypes',
      tagId: 'TagId',
      tagList: 'TagList',
      target: 'Target',
      uuidList: 'UuidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      machineTypes: 'string',
      tagId: 'string',
      tagList: 'string',
      target: 'string',
      uuidList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

