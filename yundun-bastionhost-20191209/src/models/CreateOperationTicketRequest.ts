// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOperationTicketRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  approveComment?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * root
   */
  assetAccountName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  assetId?: string;
  /**
   * @example
   * 1679393152
   */
  effectEndTime?: number;
  /**
   * @example
   * 1685600242
   */
  effectStartTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @example
   * false
   */
  isOneTimeEffect?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SSH
   */
  protocolName?: string;
  /**
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

