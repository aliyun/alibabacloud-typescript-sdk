// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDataArchiveOrderDetailResponseBodyDataArchiveOrderDetailPluginExtraData } from "./GetDataArchiveOrderDetailResponseBodyDataArchiveOrderDetailPluginExtraData";
import { GetDataArchiveOrderDetailResponseBodyDataArchiveOrderDetailPluginParam } from "./GetDataArchiveOrderDetailResponseBodyDataArchiveOrderDetailPluginParam";


export class GetDataArchiveOrderDetailResponseBodyDataArchiveOrderDetail extends $dara.Model {
  /**
   * @remarks
   * The description of the data archiving tickets.
   * 
   * @example
   * Archiving of test results
   */
  comment?: string;
  /**
   * @remarks
   * The user who submitted the ticket.
   * 
   * @example
   * dmstest
   */
  committer?: string;
  /**
   * @remarks
   * The ID of the user who submitted the ticket. The ID is a user ID and not the ID of an Alibaba Cloud account.
   * 
   * @example
   * 26***
   */
  committerId?: number;
  /**
   * @remarks
   * The time when the ticket was created.
   * 
   * @example
   * 2023-05-15 16:00:48
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the ticket was last modified.
   * 
   * @example
   * 2023-05-23 16:00:48
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of data archiving tickets.
   * 
   * @example
   * 868****
   */
  id?: number;
  /**
   * @remarks
   * The additional information about the ticket.
   */
  pluginExtraData?: GetDataArchiveOrderDetailResponseBodyDataArchiveOrderDetailPluginExtraData;
  /**
   * @remarks
   * The ticket creation parameter. The value is a JSON string. For more information, see [PluginType parameter](https://help.aliyun.com/document_detail/429109.html).
   */
  pluginParam?: GetDataArchiveOrderDetailResponseBodyDataArchiveOrderDetailPluginParam;
  /**
   * @remarks
   * The plug-in type that corresponds to the type of the ticket. The plug-in type for data archiving is DATA_ARCHIVE. For more information, see [PluginType parameter](https://help.aliyun.com/document_detail/429109.html).
   * 
   * @example
   * DATA_ARCHIVE
   */
  pluginType?: string;
  /**
   * @remarks
   * The user IDs related to the ticket.
   */
  relatedUserList?: number[];
  /**
   * @remarks
   * The nicknames of the users that are related to the ticket.
   */
  relatedUserNickList?: string[];
  /**
   * @remarks
   * The status code of the ticket. Valid values:
   * 
   * *   **new**: newly created.
   * *   **toaudit**: being reviewed.
   * *   **Approved**: approved.
   * *   **reject**: rejected.
   * *   **processing**: being executed.
   * *   **Success**: successful.
   * *   **closed**: disabled.
   * 
   * @example
   * processing
   */
  statusCode?: string;
  /**
   * @remarks
   * The status description of the ticket.
   * 
   * @example
   * a ticket task is being executed.
   */
  statusDesc?: string;
  /**
   * @remarks
   * The ID of the approval process. You can call the [GetOrderBaseInfo](https://help.aliyun.com/document_detail/144642.html) operation to obtain the ID of the approval process.
   * 
   * @example
   * 29****
   */
  workflowInstanceId?: number;
  /**
   * @remarks
   * The description of the approval process.
   * 
   * @example
   * approved
   */
  workflowStatusDesc?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      committer: 'Committer',
      committerId: 'CommitterId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      pluginExtraData: 'PluginExtraData',
      pluginParam: 'PluginParam',
      pluginType: 'PluginType',
      relatedUserList: 'RelatedUserList',
      relatedUserNickList: 'RelatedUserNickList',
      statusCode: 'StatusCode',
      statusDesc: 'StatusDesc',
      workflowInstanceId: 'WorkflowInstanceId',
      workflowStatusDesc: 'WorkflowStatusDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      committer: 'string',
      committerId: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      pluginExtraData: GetDataArchiveOrderDetailResponseBodyDataArchiveOrderDetailPluginExtraData,
      pluginParam: GetDataArchiveOrderDetailResponseBodyDataArchiveOrderDetailPluginParam,
      pluginType: 'string',
      relatedUserList: { 'type': 'array', 'itemType': 'number' },
      relatedUserNickList: { 'type': 'array', 'itemType': 'string' },
      statusCode: 'string',
      statusDesc: 'string',
      workflowInstanceId: 'number',
      workflowStatusDesc: 'string',
    };
  }

  validate() {
    if(this.pluginExtraData && typeof (this.pluginExtraData as any).validate === 'function') {
      (this.pluginExtraData as any).validate();
    }
    if(this.pluginParam && typeof (this.pluginParam as any).validate === 'function') {
      (this.pluginParam as any).validate();
    }
    if(Array.isArray(this.relatedUserList)) {
      $dara.Model.validateArray(this.relatedUserList);
    }
    if(Array.isArray(this.relatedUserNickList)) {
      $dara.Model.validateArray(this.relatedUserNickList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

