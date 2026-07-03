// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEntitiesRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the current page. The value must be greater than or equal to 1.
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
   * - ip: IP address
   * - domain: domain name
   * - url: URL
   * - process: process
   * - file: file
   * - host: host
   * - cloud_account: cloud account
   * - container: container
   * - bucket: Object Storage Service (OSS) bucket.
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
   * - 0: No.
   * - 1: Yes.
   * 
   * @example
   * 1
   */
  isMalwareEntity?: string;
  /**
   * @remarks
   * The malicious entity type.
   * 
   * @example
   * aliyun.siem.sas.alert_tag.miner_software
   */
  malwareType?: string;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Select the region based on the region where your assets reside. Valid values:
   * - cn-hangzhou: the assets reside in the Chinese mainland or Hong Kong (China).
   * - ap-southeast-1: the assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the member to which the administrator switches the view.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The view type. Valid values:
   * 
   * - 0: the view of the current Alibaba Cloud account.
   * - 1: the view of all accounts in the enterprise.
   * 
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @remarks
   * The entity tags. The value is a JSON array string:
   * 
   * `"[{"tagKey1":"tagValue1"},{"tagKey2":"tagValue2"}]"`.
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

