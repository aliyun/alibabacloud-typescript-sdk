// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckServiceLinkedRoleEfloCnpForDeletingRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud account.
   * 
   * @example
   * 345678901234
   */
  accountId?: string;
  /**
   * @remarks
   * The ID of the deletion task.
   * 
   * @example
   * task-003
   */
  deletionTaskId?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the RAM role.
   * 
   * The trusted entity of the RAM role is an Alibaba Cloud account. For more information, see [Create a RAM role for a trusted Alibaba Cloud account](https://help.aliyun.com/document_detail/93691.html) or [CreateRole](https://help.aliyun.com/document_detail/28710.html).
   * 
   * Format: `acs:ram::<account_id>:role/<role_name>`.
   * 
   * You can view the ARN in the RAM console or by calling operations. The following items describe the validity periods of storage addresses:
   * 
   * *   For more information about how to view the ARN in the RAM console, see [How do I find the ARN of the RAM role?](https://help.aliyun.com/document_detail/39744.html)
   * *   For more information about how to view the ARN by calling operations, see [ListRoles](https://help.aliyun.com/document_detail/28713.html) or [GetRole](https://help.aliyun.com/document_detail/28711.html).
   * 
   * @example
   * arn:aws:iam::345678901234:role/eflo-cnp-role
   */
  roleArn?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  SPIRegionId?: string;
  /**
   * @remarks
   * The Service Name.
   * 
   * @example
   * eflo-cnp
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      deletionTaskId: 'DeletionTaskId',
      roleArn: 'RoleArn',
      SPIRegionId: 'SPIRegionId',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      deletionTaskId: 'string',
      roleArn: 'string',
      SPIRegionId: 'string',
      serviceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

