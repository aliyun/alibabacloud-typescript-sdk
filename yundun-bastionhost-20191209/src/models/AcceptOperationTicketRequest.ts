// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AcceptOperationTicketRequest extends $dara.Model {
  /**
   * @remarks
   * The review description.
   * 
   * @example
   * O\\&M allowed
   */
  comment?: string;
  /**
   * @remarks
   * The maximum number of logons allowed. Valid values:
   * 
   * *   **0**: The number of logons is unlimited. The O\\&M engineer can log on to the specified asset for unlimited times during the validity period.
   * *   **1**: The O\\&M engineer can log on to the specified asset only once during the validity period.
   * 
   * > *   You can set this parameter only to 0 if you review an O\\&M application on a database.
   * > *   If you do not specify this parameter, the default value 0 is used.
   * 
   * @example
   * 1
   */
  effectCount?: string;
  /**
   * @remarks
   * The end time of the validity period. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1679393152
   */
  effectEndTime?: string;
  /**
   * @remarks
   * The start time of the validity period. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1685600242
   */
  effectStartTime?: string;
  /**
   * @remarks
   * The ID of the bastion host.
   * 
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query the ID of the bastion host.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the O\\&M application that you want to approve. You can call the ListOperationTickets operation to query the IDs of all O\\&M applications that require review.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  operationTicketId?: string;
  /**
   * @remarks
   * The region ID of the bastion host.
   * 
   * >  For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
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

