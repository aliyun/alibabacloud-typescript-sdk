// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevokeCoordinatePrivilegeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the stream coordination task.
   * 
   * This parameter is required.
   * 
   * @example
   * co-fqsm6e8ee75w61fp9
   */
  coId?: string;
  /**
   * @remarks
   * The ID of the end user.
   * 
   * @example
   * zhangsan
   */
  endUserId?: string;
  /**
   * @remarks
   * The ID of the region. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The type of user who requires the coordinate permissions.
   * 
   * Set the value to TENANT_ADMIN. Only tenant administrators can be granted with the coordinate permissions.
   * 
   * This parameter is required.
   * 
   * @example
   * TENANT_ADMIN
   */
  userType?: string;
  /**
   * @remarks
   * The unique identifier of the client. If you use an Alibaba Cloud Workspace client, click **About** on the client logon page to view the identifier of the client.
   * 
   * @example
   * C78CA9E99315687575DD2844C1F3****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      coId: 'CoId',
      endUserId: 'EndUserId',
      regionId: 'RegionId',
      userType: 'UserType',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coId: 'string',
      endUserId: 'string',
      regionId: 'string',
      userType: 'string',
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

