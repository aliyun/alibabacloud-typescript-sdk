// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RejectOperationTicketRequest extends $dara.Model {
  /**
   * @remarks
   * The approval comment.
   * 
   * @example
   * Reject
   */
  comment?: string;
  /**
   * @remarks
   * The instance ID of the Bastionhost instance.
   * > You can invoke the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to obtain the parameter value.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the O&M application to be rejected.
   * > You can call the [ListOperationTickets](https://help.aliyun.com/document_detail/2584313.html) operation to query the IDs of all O&M applications that require approval.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  operationTicketId?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 3
   */
  projectId?: number;
  /**
   * @remarks
   * The region ID of the Bastionhost instance.
   * > For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      instanceId: 'InstanceId',
      operationTicketId: 'OperationTicketId',
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
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

