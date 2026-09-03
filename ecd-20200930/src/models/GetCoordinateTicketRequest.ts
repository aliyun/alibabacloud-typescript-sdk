// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCoordinateTicketRequest extends $dara.Model {
  /**
   * @remarks
   * The coordination flow ID. This value is the `Coid` returned by the [ApplyCoordinationForMonitoring](~~ApplyCoordinationForMonitoring~~) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * co-0sot77uale3****
   */
  coId?: string;
  /**
   * @remarks
   * The username of the end user. This parameter is not required on the administrator side.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) to query the regions supported by Elastic Desktop Service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The cloud computer connection task ID. This parameter is not required for the first request. If the first request does not return a Ticket, specify the `TaskId` returned by the first request in subsequent requests.
   * 
   * @example
   * 39cc15e5-6998-4b9f-9b2c-7a4cc3e2****
   */
  taskId?: string;
  /**
   * @remarks
   * The user type.
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

