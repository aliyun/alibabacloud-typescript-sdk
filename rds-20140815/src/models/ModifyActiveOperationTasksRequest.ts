// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyActiveOperationTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The O\\&M task ID. Separate multiple IDs with commas (,).
   * 
   * >  You can call the DescribeActiveOperationTask operation to query the O\\&M task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 11111,22222
   */
  ids?: string;
  /**
   * @remarks
   * Specifies whether to immediately start scheduling. Valid values:
   * 
   * *   0 (default): no
   * *   1: yes
   * 
   * > 
   * 
   * *   If you set this parameter to 0, the SwitchTime parameter takes effect. If you set this parameter to 1, the SwitchTime parameter does not take effect. In this case, the start time of the task is the current time, and the system determines the switching time based on the start time.
   * 
   * *   Immediate scheduling specifies that the task enters the preparing state instead of being executed immediately. After the preparation is complete, the switchover is performed. You can call the DescribeActiveOperationTasks to query the preparation time that is returned for the PrepareInterval parameter.
   * 
   * @example
   * 0
   */
  immediateStart?: number;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * The scheduled switching time that you want to specify. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * >  The time that is specified by the SwitchTime parameter cannot be later than the time that is specified by the Deadline parameter. You can call the DescribeActiveOperationTasks operation to query the value of the Deadline parameter in the response.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-10-17T18:50:00Z
   */
  switchTime?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
      immediateStart: 'ImmediateStart',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      switchTime: 'SwitchTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: 'string',
      immediateStart: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
      switchTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

