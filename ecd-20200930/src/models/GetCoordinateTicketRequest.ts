// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCoordinateTicketRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the stream collaboration. You can obtain the value of this parameter based on the value of `Coid` that is returned by the `ApplyCoordinationForMonitoring` operation.
   * 
   * This parameter is required.
   * 
   * @example
   * co-0sot77uale3****
   */
  coId?: string;
  /**
   * @remarks
   * The name of the convenience user account. If you initiate the request as an administrator, you do not need to specify this parameter.
   * 
   * @example
   * Alice
   */
  endUserId?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/436773.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the cloud computer connection task. The first time you initiate the request, you do not need to specify the ID of the cloud computer connection task. If no ticket is returned after you initiate the first request, you must specify the value of taskId that is returned for the first request in the subsequent request.
   * 
   * @example
   * 39cc15e5-6998-4b9f-9b2c-7a4cc3e2****
   */
  taskId?: string;
  /**
   * @remarks
   * The type of the user.
   * 
   * Set the value to TENANT_ADMIN.
   * 
   * *   The value of
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     TENANT_ADMIN
   * 
   *     <!-- -->
   * 
   *     specifies an administrator.
   * 
   * This parameter is required.
   * 
   * @example
   * TENANT_ADMIN
   */
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      coId: 'CoId',
      endUserId: 'EndUserId',
      regionId: 'RegionId',
      taskId: 'TaskId',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coId: 'string',
      endUserId: 'string',
      regionId: 'string',
      taskId: 'string',
      userType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

