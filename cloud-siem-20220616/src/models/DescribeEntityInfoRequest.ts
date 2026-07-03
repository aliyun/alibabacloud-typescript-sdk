// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEntityInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The logical ID of the entity.
   * 
   * @example
   * 12345
   */
  entityId?: number;
  /**
   * @remarks
   * The feature value of the entity. You can perform a fuzzy search for the entity.
   * 
   * @example
   * test22.php
   */
  entityIdentity?: string;
  /**
   * @remarks
   * The globally unique UUID of the event.
   * 
   * @example
   * 85ea4241-798f-4684-a876-65d4f0c3****
   */
  incidentUuid?: string;
  /**
   * @remarks
   * The region of the Data Management center. Select a region based on the region where your assets are located. Valid values:
   * 
   * - cn-hangzhou: Your assets are in the Chinese mainland or China (Hong Kong).
   * 
   * - ap-southeast-1: Your assets are in a region outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of the member. The administrator can use this ID to switch to the view of this member.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The view type.
   * 
   * - 0: the view of the current Alibaba Cloud account.
   * 
   * - 1: the view of all accounts that belong to the enterprise.
   * 
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @remarks
   * The ID of the SOAR response policy.
   * 
   * @example
   * 577bbf90-a770-44a7-8154-586aa2d318fa
   */
  sophonTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      entityIdentity: 'EntityIdentity',
      incidentUuid: 'IncidentUuid',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
      sophonTaskId: 'SophonTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'number',
      entityIdentity: 'string',
      incidentUuid: 'string',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
      sophonTaskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

