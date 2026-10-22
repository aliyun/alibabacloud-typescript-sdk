// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOperationTicketsResponseBodyOperationTickets extends $dara.Model {
  /**
   * @remarks
   * The ID of the O&M applicant.
   * 
   * @example
   * 1
   */
  applyUserId?: string;
  /**
   * @remarks
   * The username of the O&M applicant.
   * 
   * @example
   * test
   */
  applyUsername?: string;
  /**
   * @remarks
   * The remarks entered by the O&M engineer when applying for O&M.
   * 
   * @example
   * Comment
   */
  approveComment?: string;
  /**
   * @remarks
   * The ID of the asset account for which O&M is requested.
   * 
   * @example
   * 1
   */
  assetAccountId?: string;
  /**
   * @remarks
   * The logon name of the asset account for which O&M is requested.
   * 
   * @example
   * root
   */
  assetAccountName?: string;
  /**
   * @remarks
   * The address of the asset for which O&M is requested.
   * 
   * @example
   * 10.167.XX.XX
   */
  assetAddress?: string;
  /**
   * @remarks
   * The ID of the asset for which O&M is requested.
   * 
   * @example
   * 2
   */
  assetId?: string;
  /**
   * @remarks
   * The name of the asset for which O&M is requested.
   * 
   * @example
   * poros-test
   */
  assetName?: string;
  /**
   * @remarks
   * The ID of the network domain to which the asset for which O&M is requested belongs.
   * 
   * @example
   * 2
   */
  assetNetworkDomainId?: string;
  /**
   * @remarks
   * The operating system type of the asset for which O&M is requested.
   * 
   * @example
   * Linux
   */
  assetOs?: string;
  /**
   * @remarks
   * The name of the asset source to which the asset for which O&M is requested belongs. Valid values:
   * - **Local**: local host
   * - **Ecs**: ECS instance
   * - **Rds**: ApsaraDB RDS instance
   * - name of a third-party asset source
   * 
   * @example
   * Local
   */
  assetSource?: string;
  /**
   * @remarks
   * The ID of the asset source to which the asset for which O&M is requested belongs.
   * 
   * @example
   * 1
   */
  assetSourceInstanceId?: string;
  /**
   * @remarks
   * The time when the application was submitted. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1669965908
   */
  createdTime?: number;
  /**
   * @remarks
   * The limit on the number of logons requested by the O&M engineer. Valid values:
   * 
   * - **0**: No limit is imposed on the number of logons. The O&M engineer can log on an unlimited number of times within the validity period.
   * - **1**: The O&M engineer is allowed to log on only once within the validity period.
   * 
   * @example
   * 0
   */
  effectCount?: number;
  /**
   * @remarks
   * The end time of the approved O&M period specified by the O&M engineer. The value is a UNIX timestamp in seconds.
   * > A value of 0 indicates that the O&M engineer did not specify a time when submitting the application.
   * 
   * @example
   * 1679393152
   */
  effectEndTime?: number;
  /**
   * @remarks
   * The start time of the approved O&M period specified by the O&M engineer. The value is a UNIX timestamp in seconds.
   * > A value of 0 indicates that the O&M engineer did not specify a time when submitting the application.
   * 
   * @example
   * 1685600242
   */
  effectStartTime?: number;
  /**
   * @remarks
   * The ID of the O&M ticket pending approval.
   * 
   * @example
   * 1
   */
  operationTicketId?: string;
  /**
   * @remarks
   * The name of the protocol for the O&M request.
   * 
   * @example
   * SSH
   */
  protocolName?: string;
  /**
   * @remarks
   * The approval status. Valid values:
   * 
   * - Normal: pending approval
   * 
   * @example
   * Normal
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      applyUserId: 'ApplyUserId',
      applyUsername: 'ApplyUsername',
      approveComment: 'ApproveComment',
      assetAccountId: 'AssetAccountId',
      assetAccountName: 'AssetAccountName',
      assetAddress: 'AssetAddress',
      assetId: 'AssetId',
      assetName: 'AssetName',
      assetNetworkDomainId: 'AssetNetworkDomainId',
      assetOs: 'AssetOs',
      assetSource: 'AssetSource',
      assetSourceInstanceId: 'AssetSourceInstanceId',
      createdTime: 'CreatedTime',
      effectCount: 'EffectCount',
      effectEndTime: 'EffectEndTime',
      effectStartTime: 'EffectStartTime',
      operationTicketId: 'OperationTicketId',
      protocolName: 'ProtocolName',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyUserId: 'string',
      applyUsername: 'string',
      approveComment: 'string',
      assetAccountId: 'string',
      assetAccountName: 'string',
      assetAddress: 'string',
      assetId: 'string',
      assetName: 'string',
      assetNetworkDomainId: 'string',
      assetOs: 'string',
      assetSource: 'string',
      assetSourceInstanceId: 'string',
      createdTime: 'number',
      effectCount: 'number',
      effectEndTime: 'number',
      effectStartTime: 'number',
      operationTicketId: 'string',
      protocolName: 'string',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOperationTicketsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of O&M tickets pending approval.
   */
  operationTickets?: ListOperationTicketsResponseBodyOperationTickets[];
  /**
   * @remarks
   * The unique identifier generated by Alibaba Cloud for the request.
   * 
   * @example
   * EC9BF0F4-8983-491A-BC8C-1B4DD94976DE
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of O&M tickets pending approval.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      operationTickets: 'OperationTickets',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationTickets: { 'type': 'array', 'itemType': ListOperationTicketsResponseBodyOperationTickets },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.operationTickets)) {
      $dara.Model.validateArray(this.operationTickets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

