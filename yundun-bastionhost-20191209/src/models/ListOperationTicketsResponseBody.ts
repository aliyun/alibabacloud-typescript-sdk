// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOperationTicketsResponseBodyOperationTickets extends $dara.Model {
  /**
   * @remarks
   * The ID of the user who submitted the O\\&M request.
   * 
   * @example
   * 1
   */
  applyUserId?: string;
  /**
   * @remarks
   * The username of the user who submitted the O\\&M request.
   * 
   * @example
   * test
   */
  applyUsername?: string;
  /**
   * @remarks
   * The comments provided by the O\\&M engineer when submitting the request.
   * 
   * @example
   * Request O&M
   */
  approveComment?: string;
  /**
   * @remarks
   * The ID of the asset account for which the O\\&M request was submitted.
   * 
   * @example
   * 1
   */
  assetAccountId?: string;
  /**
   * @remarks
   * The logon name of the asset account for which the O\\&M request was submitted.
   * 
   * @example
   * root
   */
  assetAccountName?: string;
  /**
   * @remarks
   * The address of the asset for which the O\\&M request was submitted.
   * 
   * @example
   * 10.167.XX.XX
   */
  assetAddress?: string;
  /**
   * @remarks
   * The ID of the asset for which the O\\&M request was submitted.
   * 
   * @example
   * 2
   */
  assetId?: string;
  /**
   * @remarks
   * The name of the asset for which the O\\&M request was submitted.
   * 
   * @example
   * poros-test
   */
  assetName?: string;
  /**
   * @remarks
   * The ID of the network domain to which the asset belongs.
   * 
   * @example
   * 2
   */
  assetNetworkDomainId?: string;
  /**
   * @remarks
   * The operating system of the asset.
   * 
   * @example
   * Linux
   */
  assetOs?: string;
  /**
   * @remarks
   * The source of the asset. Valid values:
   * 
   * - **Local**: a local host
   * 
   * - **Ecs**: an ECS instance
   * 
   * - **Rds**: an RDS instance
   * 
   * - The name of a third-party asset source
   * 
   * @example
   * Local
   */
  assetSource?: string;
  /**
   * @remarks
   * The ID of the source of the asset.
   * 
   * @example
   * 1
   */
  assetSourceInstanceId?: string;
  /**
   * @remarks
   * The time when the request was submitted. This is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1669965908
   */
  createdTime?: number;
  /**
   * @remarks
   * The number of permitted logons specified in the request. Valid values:
   * 
   * - **0**: unlimited logons. The O\\&M engineer can log on an unlimited number of times within the validity period.
   * 
   * - **1**: one-time logon. The O\\&M engineer can log on only once within the validity period.
   * 
   * @example
   * 0
   */
  effectCount?: number;
  /**
   * @remarks
   * The end time of the O\\&M period specified by the O\\&M engineer. This is a UNIX timestamp. Unit: seconds.
   * 
   * > A value of 0 indicates that the O\\&M engineer did not specify an end time.
   * 
   * @example
   * 1679393152
   */
  effectEndTime?: number;
  /**
   * @remarks
   * The start time of the O\\&M period specified by the O\\&M engineer. This is a UNIX timestamp. Unit: seconds.
   * 
   * > A value of 0 indicates that the O\\&M engineer did not specify a start time.
   * 
   * @example
   * 1685600242
   */
  effectStartTime?: number;
  /**
   * @remarks
   * The ID of the O\\&M request that requires approval.
   * 
   * @example
   * 1
   */
  operationTicketId?: string;
  /**
   * @remarks
   * The name of the protocol used for the O\\&M request.
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
   * A list of O\\&M requests that are pending approval.
   */
  operationTickets?: ListOperationTicketsResponseBodyOperationTickets[];
  /**
   * @remarks
   * The unique ID generated by Alibaba Cloud for the request.
   * 
   * @example
   * EC9BF0F4-8983-491A-BC8C-1B4DD94976DE
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of O\\&M requests that are pending approval.
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

