// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSandboxInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the request fails.
   * 
   * @example
   * Param.NotFound
   */
  code?: string;
  /**
   * @remarks
   * The response parameters.
   * 
   * *   **connectionString**: the connection string of the sandbox instance, in the format of IP address:Port number. This parameter indicates the endpoint of the sandbox instance if the value of the SandboxType parameter is **Sandbox**. This parameter indicates the Network File System (NFS) mount address if the value of the SandboxType parameter is **NFS**.
   * *   **restoreSeconds**: the time required to create the sandbox instance. Unit: seconds.
   * *   **restoreTime**: the point in time to which the sandbox instance is restored. The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC.
   * *   **instanceId**: the ID of the sandbox instance.
   * *   **backupSetId**: the ID of the backup set.
   * *   **createTime**: the point in time when the sandbox instance was created. The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC.
   * *   **backupPlanId**: the ID of the backup schedule.
   * *   **vpcId**: the ID of the virtual private cloud (VPC).
   * *   **vpcSwitchId**: the ID of the VSwitch.
   * *   **sandboxSpecification**: the specifications of the sandbox instance.
   * *   **status**: the status of the sandbox instance. Valid values: **running**, **check_pass**, and **stop**.
   * 
   * @example
   * {     "number": 1,     "size": 1,     "content": [       {         "connectionString": "172.26.178.229:3306",         "restoreSeconds": 15,         "restoreTime": "2021-08-11T07:26:24Z",         "instanceId": "1jxxxxx9xxxms",         "backupSetId": "1hxxxx8xxxxxa_20210811152624",         "createTime": "2021-08-12T07:40:29Z",         "backupPlanId": "1hxxxx8xxxxxa",         "vpcId": "vpc-bp1dxxxxxjy0xxxxx1xxp",         "sandboxSpecification": "MYSQL_1C_1M_SD",         "status": "running",         "vpcSwitchId": "vsw-bp1bxxxxxumxxxxxwxx2w"       }     ],     "totalElements": 1   }
   */
  data?: string;
  /**
   * @remarks
   * The error code returned if the request fails.
   * 
   * @example
   * Param.NotFound
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned if the request fails.
   * 
   * @example
   * The specified parameter %s value is not valid.
   */
  errMessage?: string;
  /**
   * @remarks
   * The error message returned if the request fails.
   * 
   * @example
   * The specified parameter %s value is not valid.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4F1888AC-1138-4995-B9FE-D2734F61C058
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      errCode: 'string',
      errMessage: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

