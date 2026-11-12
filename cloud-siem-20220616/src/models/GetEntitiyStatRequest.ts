// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEntitiyStatRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the asset associated with the incident.
   * 
   * @example
   * 6c740667-80b2-476d-8924-2e706feb****
   */
  assetName?: string;
  /**
   * @remarks
   * The ID of the asset associated with the incident.
   * 
   * @example
   * 6c740667-80b2-476d-8924-2e706feb****
   */
  assetUuid?: string;
  /**
   * @remarks
   * The ID of the asset associated with the incident.
   * 
   * @example
   * 6c740667-80b2-476d-8924-2e706feb****
   */
  entityName?: string;
  /**
   * @remarks
   * The ID of the asset associated with the incident.
   * 
   * @example
   * 6c740667-80b2-476d-8924-2e706feb****
   */
  entityType?: string;
  /**
   * @remarks
   * The ID of the asset associated with the incident.
   * 
   * @example
   * 6c740667-80b2-476d-8924-2e706feb****
   */
  entityUuid?: string;
  /**
   * @remarks
   * The list of entity UUIDs. Separate multiple UUIDs with commas.
   * 
   * @example
   * 6c740667-80b2-476d-8924-2e706feb****,6c740667-80b2-476d-8924-2e706feb****
   */
  entityUuids?: string;
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
   * The ID of the asset associated with the incident.
   * 
   * @example
   * 6c740667-80b2-476d-8924-2e706feb****
   */
  isAsset?: string;
  /**
   * @remarks
   * The sort order of the incident list. Valid values:
   * - desc: descending order
   * - asc: ascending order
   * 
   * @example
   * desc
   */
  isMalwareEntity?: string;
  /**
   * @remarks
   * The region where the data management center of Threat Analysis is located. Select the region of the management center based on the region where your assets reside. Valid values:
   * - cn-hangzhou: Assets reside in the Chinese mainland and Hong Kong (China).
   * - ap-southeast-1: Assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the user whose view the administrator switches to.
   * 
   * @example
   * 1637941677243702
   */
  roleFor?: number;
  /**
   * @remarks
   * The role type. Valid values:
   * - 0: single-account logon
   * - 1: global view
   * - 2: switched view
   * - 3: local view
   * 
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @remarks
   * The entity tags. The value is a JSON array string in the following format: "[{"tagKey1":"tagValue1"},{"tagKey2":"tagValue2"}]".
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
      entityUuids: 'EntityUuids',
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
      entityUuids: 'string',
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

