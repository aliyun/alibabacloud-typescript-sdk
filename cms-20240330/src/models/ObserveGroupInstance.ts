// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ObserveGroupInstance extends $dara.Model {
  /**
   * @remarks
   * The entity category (adapted by entityType).
   */
  category?: string;
  /**
   * @remarks
   * The key-value pairs of monitoring dimensions.
   */
  dimension?: { [key: string]: string };
  /**
   * @remarks
   * The entity domain (such as acs).
   */
  entityDomain?: string;
  /**
   * @remarks
   * The entity type (such as acs.ecs.instance).
   */
  entityType?: string;
  /**
   * @remarks
   * The ID of the observation group to which the entity belongs.
   */
  groupId?: string;
  /**
   * @remarks
   * The instance ID.
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   */
  instanceName?: string;
  /**
   * @remarks
   * The region ID of the instance.
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID of the instance.
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The key-value pairs of instance tags.
   */
  tags?: { [key: string]: string };
  /**
   * @remarks
   * The UID of the user to which the instance belongs.
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      dimension: 'dimension',
      entityDomain: 'entityDomain',
      entityType: 'entityType',
      groupId: 'groupId',
      instanceId: 'instanceId',
      instanceName: 'instanceName',
      regionId: 'regionId',
      resourceGroupId: 'resourceGroupId',
      tags: 'tags',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      dimension: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      entityDomain: 'string',
      entityType: 'string',
      groupId: 'string',
      instanceId: 'string',
      instanceName: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      userId: 'string',
    };
  }

  validate() {
    if(this.dimension) {
      $dara.Model.validateMap(this.dimension);
    }
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

