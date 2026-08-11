// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AcceptOperationTicketRequest extends $dara.Model {
  /**
   * @remarks
   * The approval remarks.
   * 
   * @example
   * Comment
   */
  comment?: string;
  /**
   * @remarks
   * The limit on the number of logons allowed. Valid values:
   * 
   * - **0**: No limit on the number of logons. The O&M engineer can log on an unlimited number of times during the validity period.
   * 
   * - **1**: The O&M engineer can log on only once during the validity period.
   * > - The logon limit for database asset O&M approval can only be set to unlimited.
   * > - If an empty character string is passed, the default value is unlimited.
   * 
   * @example
   * 1
   */
  effectCount?: string;
  /**
   * @remarks
   * The end time of the validity period for logon (in seconds, UNIX timestamp format).
   * 
   * @example
   * 1679393152
   */
  effectEndTime?: string;
  /**
   * @remarks
   * The start time of the validity period for logon (in seconds, UNIX timestamp format).
   * 
   * @example
   * 1685600242
   */
  effectStartTime?: string;
  /**
   * @remarks
   * The ID of the bastion host instance.
   * > You can invoke the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the O&M request to approve.
   * > You can call the [ListOperationTickets](https://help.aliyun.com/document_detail/2584313.html) operation to query all OperationTicketId values that require approval.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  operationTicketId?: string;
  /**
   * @remarks
   * The project ID.
   */
  projectId?: number;
  /**
   * @remarks
   * The region ID of the bastion host.
   * > For the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      effectCount: 'EffectCount',
      effectEndTime: 'EffectEndTime',
      effectStartTime: 'EffectStartTime',
      instanceId: 'InstanceId',
      operationTicketId: 'OperationTicketId',
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      effectCount: 'string',
      effectEndTime: 'string',
      effectStartTime: 'string',
      instanceId: 'string',
      operationTicketId: 'string',
      projectId: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

