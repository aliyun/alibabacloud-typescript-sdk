// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOperationTicketsResponseBodyOperationTickets extends $dara.Model {
  /**
   * @remarks
   * The ID of the O\\&M applicant.
   * 
   * @example
   * 1
   */
  applyUserId?: string;
  /**
   * @remarks
   * The username of the O\\&M applicant.
   * 
   * @example
   * test
   */
  applyUsername?: string;
  /**
   * @remarks
   * The remarks entered when the O\\&M personnel applies for O\\&M permissions.
   * 
   * @example
   * Apply for O\\&M
   */
  approveComment?: string;
  /**
   * @remarks
   * The ID of the asset account.
   * 
   * @example
   * 1
   */
  assetAccountId?: string;
  /**
   * @remarks
   * The username of the asset account.
   * 
   * @example
   * root
   */
  assetAccountName?: string;
  /**
   * @remarks
   * The IP address of the asset.
   * 
   * @example
   * 10.167.XX.XX
   */
  assetAddress?: string;
  /**
   * @remarks
   * The ID of the asset.
   * 
   * @example
   * 2
   */
  assetId?: string;
  /**
   * @remarks
   * The name of the asset.
   * 
   * @example
   * poros-test
   */
  assetName?: string;
  /**
   * @remarks
   * The network domain ID of the asset.
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
   * The name of the asset source to which the asset belongs. Valid values:
   * 
   * *   **Local**: an on-premises host.
   * *   **Ecs**: an Elastic Compute Service (ECS) instance.
   * *   **Rds**: an ApsaraDB RDS instance.
   * *   A third-party asset source.
   * 
   * @example
   * Local
   */
  assetSource?: string;
  /**
   * @remarks
   * The ID of the asset source to which the asset belongs.
   * 
   * @example
   * 1
   */
  assetSourceInstanceId?: string;
  /**
   * @remarks
   * The time when the O\\&M application was submitted. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1669965908
   */
  createdTime?: number;
  /**
   * @remarks
   * The maximum number of logons applied by the O\\&M engineer. Valid values:
   * 
   * *   **0**: The number of logons is unlimited. The O\\&M engineer can log on to the specified asset for unlimited times during the validity period.
   * *   **1**: The O\\&M engineer can log on to the specified asset only once during the validity period.
   * 
   * @example
   * 0
   */
  effectCount?: number;
  /**
   * @remarks
   * The end time of the validity period. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1679393152
   */
  effectEndTime?: number;
  /**
   * @remarks
   * The start time of the validity period. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1685600242
   */
  effectStartTime?: number;
  /**
   * @remarks
   * The ID of the O\\&M application to be reviewed.
   * 
   * @example
   * 1
   */
  operationTicketId?: string;
  /**
   * @remarks
   * The O\\&M protocol.
   * 
   * @example
   * SSH
   */
  protocolName?: string;
  /**
   * @remarks
   * The status of the review. Valid value:
   * 
   * *   Normal: to be reviewed
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
   * The O\\&M applications to be reviewed.
   */
  operationTickets?: ListOperationTicketsResponseBodyOperationTickets[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EC9BF0F4-8983-491A-BC8C-1B4DD94976DE
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of O\\&M applications to be reviewed.
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

