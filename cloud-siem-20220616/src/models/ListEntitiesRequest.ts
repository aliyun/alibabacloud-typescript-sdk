// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEntitiesRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the current page. The value must be greater than or equal to 1.
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
   * - domain: Domain name
   * - url: URL
   * - process: Process
   * - file: File
   * - host: Host
   * - cloud_account: Cloud account
   * - container: Container
   * - bucket: OSS bucket
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
   * The malware entity type.
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
   * The region where the data management center of Threat Analysis is located. You must select the region of the management center based on the region where your assets are located. Valid values:
   * - cn-hangzhou: Assets are located in the Chinese mainland and Hong Kong (China).
   * - ap-southeast-1: Assets are located outside China.
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
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The view type. Valid values:
   * 
   * - 0: The view of the current Alibaba Cloud account.
   * - 1: The view of all accounts in the enterprise.
   * 
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @remarks
   * The entity tags. The format is a JSON array string:
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

