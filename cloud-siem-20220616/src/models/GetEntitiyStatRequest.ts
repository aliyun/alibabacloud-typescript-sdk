// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEntitiyStatRequest extends $dara.Model {
  /**
   * @remarks
   * The asset ID associated with the incident.
   * 
   * @example
   * 6c740667-80b2-476d-8924-2e706feb****
   */
  assetName?: string;
  /**
   * @remarks
   * The asset ID associated with the incident.
   * 
   * @example
   * 6c740667-80b2-476d-8924-2e706feb****
   */
  assetUuid?: string;
  /**
   * @remarks
   * The asset ID associated with the incident.
   * 
   * @example
   * 6c740667-80b2-476d-8924-2e706feb****
   */
  entityName?: string;
  /**
   * @remarks
   * The asset ID associated with the incident.
   * 
   * @example
   * 6c740667-80b2-476d-8924-2e706feb****
   */
  entityType?: string;
  /**
   * @remarks
   * The asset ID associated with the incident.
   * 
   * @example
   * 6c740667-80b2-476d-8924-2e706feb****
   */
  entityUuid?: string;
  /**
   * @remarks
   * The incident ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 85ea4241-798f-4684-a876-65d4f0c3****
   */
  incidentUuid?: string;
  /**
   * @remarks
   * The asset ID associated with the incident.
   * 
   * @example
   * 6c740667-80b2-476d-8924-2e706feb****
   */
  isAsset?: string;
  /**
   * @remarks
   * The sort order of the incident list. Valid values:
   * 
   * - desc: descending order.
   * - asc: ascending order.
   * 
   * @example
   * desc
   */
  isMalwareEntity?: string;
  /**
   * @remarks
   * The region where the threat detection and response data management center resides. Select the management center based on the region of your assets. Valid values:
   * 
   * - cn-hangzhou: the asset belongs to the Chinese mainland or Hong Kong (China).
   * - ap-southeast-1: the asset belongs to a region outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of the member to which the administrator switches the view.
   * 
   * @example
   * 1637941677243702
   */
  roleFor?: number;
  /**
   * @remarks
   * The view type. Valid values:
   * 
   * - 0: single-account logon.
   * - 1: global view.
   * - 2: switched view.
   * - 3: partial view.
   * 
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @remarks
   * The entity tags. The value is a JSON array string in the following format: \\"[{\\"tagKey1\\":\\"tagValue1\\"},{\\"tagKey2\\":\\"tagValue2\\"}]\\"
   * 
   * @example
   * sys:agent:dispose
   */
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      assetName: 'AssetName',
      assetUuid: 'AssetUuid',
      entityName: 'EntityName',
      entityType: 'EntityType',
      entityUuid: 'EntityUuid',
      incidentUuid: 'IncidentUuid',
      isAsset: 'IsAsset',
      isMalwareEntity: 'IsMalwareEntity',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetName: 'string',
      assetUuid: 'string',
      entityName: 'string',
      entityType: 'string',
      entityUuid: 'string',
      incidentUuid: 'string',
      isAsset: 'string',
      isMalwareEntity: 'string',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
      tags: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

