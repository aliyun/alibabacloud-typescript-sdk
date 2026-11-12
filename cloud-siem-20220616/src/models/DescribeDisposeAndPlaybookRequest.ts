// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDisposeAndPlaybookRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to return only available playbooks.
   */
  availableOnly?: boolean;
  /**
   * @remarks
   * The current page number. The value must be greater than or equal to 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The entity type. Valid values:
   * - ip: IP address.
   * - process: Process.
   * - file: File.
   * 
   * @example
   * ip
   */
  entityType?: string;
  /**
   * @remarks
   * The UUID of the entity.
   * 
   * @example
   * 85ea4241-798f-4684-a876-65d4f0c3****
   */
  entityUuid?: string;
  /**
   * @remarks
   * The list of entity UUIDs. Separate multiple UUIDs with commas (,).
   * 
   * @example
   * 6c740667-80b2-476d-8924-2e706feb****,6c740667-80b2-476d-8924-2e706feb****
   */
  entityUuidList?: string;
  /**
   * @remarks
   * The UUID of the incident.
   * 
   * @example
   * 85ea4241-798f-4684-a876-65d4f0c3****
   */
  incidentUuid?: string;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 100.
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
   * - 0: Current Alibaba Cloud account view.
   * - 1: View of all accounts in the enterprise.
   * 
   * @example
   * 1
   */
  roleType?: number;
  static names(): { [key: string]: string } {
    return {
      availableOnly: 'AvailableOnly',
      currentPage: 'CurrentPage',
      entityType: 'EntityType',
      entityUuid: 'EntityUuid',
      entityUuidList: 'EntityUuidList',
      incidentUuid: 'IncidentUuid',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableOnly: 'boolean',
      currentPage: 'number',
      entityType: 'string',
      entityUuid: 'string',
      entityUuidList: 'string',
      incidentUuid: 'string',
      pageSize: 'number',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

