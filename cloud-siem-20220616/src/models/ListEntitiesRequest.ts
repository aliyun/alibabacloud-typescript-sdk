// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEntitiesRequest extends $dara.Model {
  /**
   * @remarks
   * The current page number, which must be greater than or equal to 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The entity name.
   * 
   * @example
   * host1****
   */
  entityName?: string;
  /**
   * @remarks
   * The entity type. Valid values:
   * 
   * @example
   * ip
   */
  entityType?: string;
  /**
   * @remarks
   * The entity UUID.
   * 
   * @example
   * 6c740667-80b2-476d-8924-2e706feb****
   */
  entityUuid?: string;
  /**
   * @remarks
   * The list of entity UUIDs.
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
   * Specifies whether the entity is malicious. Valid values:
   * 
   * @example
   * 1
   */
  isMalwareEntity?: string;
  /**
   * @remarks
   * The malware entity type.
   * 
   * @example
   * aliyun.siem.sas.alert_tag.miner_software
   */
  malwareType?: string;
  /**
   * @remarks
   * The number of entries per page, up to a maximum of 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region where the data management center of threat analysis is located. Select the management center based on the region of your assets. Valid values:
   * - cn-hangzhou: Your assets reside in the Chinese mainland or Hong Kong (China).
   * - ap-southeast-1: Your assets reside in regions outside the Chinese mainland.
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
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The view type.
   * 
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @remarks
   * The entity tags. The value is a JSON array string:
   * 
   * `"[{"tagKey1":"tagValue1"},{"tagKey2":"tagValue2"}]"`
   * 
   * @example
   * [{"tagKey1":"tagValue1"},{"tagKey2":"tagValue2"}]
   */
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      entityName: 'EntityName',
      entityType: 'EntityType',
      entityUuid: 'EntityUuid',
      entityUuids: 'EntityUuids',
      incidentUuid: 'IncidentUuid',
      isMalwareEntity: 'IsMalwareEntity',
      malwareType: 'MalwareType',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      entityName: 'string',
      entityType: 'string',
      entityUuid: 'string',
      entityUuids: 'string',
      incidentUuid: 'string',
      isMalwareEntity: 'string',
      malwareType: 'string',
      pageSize: 'number',
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

