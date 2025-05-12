// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyCoordinatePrivilegeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application for the coordinate permissions.
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
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the most recent region list.
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
   * Valid value: TENANT_ADMIN.
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
   * 8b241d415da244a6936d6d6fa4f20f4d
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

