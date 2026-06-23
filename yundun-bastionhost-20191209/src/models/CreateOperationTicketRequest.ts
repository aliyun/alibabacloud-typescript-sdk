// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOperationTicketRequest extends $dara.Model {
  /**
   * @remarks
   * The comments on the ticket.
   * 
   * This parameter is required.
   * 
   * @example
   * Comment
   */
  approveComment?: string;
  /**
   * @remarks
   * The logon name of the asset account for the O\\&M request.
   * 
   * This parameter is required.
   * 
   * @example
   * root
   */
  assetAccountName?: string;
  /**
   * @remarks
   * The ID of the asset for which to request O\\&M.
   * 
   * > Call the [ListOperationDatabases](https://help.aliyun.com/document_detail/2758856.html) and [ListOperationHosts](https://help.aliyun.com/document_detail/2758857.html) operations to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  assetId?: string;
  /**
   * @remarks
   * The end time of the validity period for the logon request. This value is a UNIX timestamp. Unit: seconds.
   * 
   * > The end time must be later than the start time.
   * 
   * @example
   * 1679393152
   */
  effectEndTime?: number;
  /**
   * @remarks
   * The start time of the validity period for the logon request. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1685600242
   */
  effectStartTime?: number;
  /**
   * @remarks
   * The ID of the Bastionhost instance.
   * 
   * > Call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether the ticket is valid for a single logon. Valid values:
   * 
   * - **true**: The ticket is valid for a single logon.
   * 
   * - **false**: The ticket is valid for multiple logons within the validity period.
   * 
   * @example
   * false
   */
  isOneTimeEffect?: boolean;
  /**
   * @remarks
   * The name of the protocol for the O\\&M request. Valid values:
   * 
   * - SSH
   * 
   * - RDP
   * 
   * - MySQL
   * 
   * - PostgreSQL
   * 
   * - Oracle
   * 
   * - SQLServer
   * 
   * This parameter is required.
   * 
   * @example
   * SSH
   */
  protocolName?: string;
  /**
   * @remarks
   * The region ID of the Bastionhost instance.
   * 
   * > For more information about regions and zones, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      approveComment: 'ApproveComment',
      assetAccountName: 'AssetAccountName',
      assetId: 'AssetId',
      effectEndTime: 'EffectEndTime',
      effectStartTime: 'EffectStartTime',
      instanceId: 'InstanceId',
      isOneTimeEffect: 'IsOneTimeEffect',
      protocolName: 'ProtocolName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approveComment: 'string',
      assetAccountName: 'string',
      assetId: 'string',
      effectEndTime: 'number',
      effectStartTime: 'number',
      instanceId: 'string',
      isOneTimeEffect: 'boolean',
      protocolName: 'string',
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

