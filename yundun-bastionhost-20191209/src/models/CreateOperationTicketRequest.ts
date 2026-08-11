// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOperationTicketRequest extends $dara.Model {
  /**
   * @remarks
   * The remarks of the request.
   * 
   * This parameter is required.
   * 
   * @example
   * Comment
   */
  approveComment?: string;
  /**
   * @remarks
   * The logon name of the asset account for which you want to request O&M access.
   * 
   * This parameter is required.
   * 
   * @example
   * root
   */
  assetAccountName?: string;
  /**
   * @remarks
   * The ID of the asset for which you want to request O&M access.
   * > You can call the [ListOperationDatabases](https://help.aliyun.com/document_detail/2758856.html) or [ListOperationHosts](https://help.aliyun.com/document_detail/2758857.html) operation to query this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  assetId?: string;
  /**
   * @remarks
   * The end time of the validity period for the logon request. Unit: seconds. The value is a UNIX timestamp.
   * > The end time of the validity period must be later than the start time.
   * 
   * @example
   * 1679393152
   */
  effectEndTime?: number;
  /**
   * @remarks
   * The start time of the validity period for the logon request. Unit: seconds. The value is a UNIX timestamp.
   * 
   * @example
   * 1685600242
   */
  effectStartTime?: number;
  /**
   * @remarks
   * The instance ID of the bastion host.
   * > You can invoke the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of logon times allowed. Valid values:
   * - **true**: Only one logon is allowed within the validity period.
   * - **false**: Unlimited logons are allowed within the validity period.
   * 
   * @example
   * false
   */
  isOneTimeEffect?: boolean;
  /**
   * @remarks
   * The project ID.
   */
  projectId?: number;
  /**
   * @remarks
   * The name of the protocol for which you want to request O&M access. Valid values:
   * - SSH
   * - RDP
   * - MySQL
   * - PostgreSQL
   * - Oracle
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
   * The region ID of the bastion host.
   * > For the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
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
      projectId: 'ProjectId',
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
      projectId: 'number',
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

