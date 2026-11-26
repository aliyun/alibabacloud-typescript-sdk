// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ObserveGroupInstance extends $dara.Model {
  /**
   * @remarks
   * The entity category adapted from entityType.
   * 
   * @example
   * ecs
   */
  category?: string;
  /**
   * @remarks
   * The key-value pairs of the monitoring dimensions.
   * 
   * @example
   * {"userId":"1234567890123456","instanceId":"i-bp1gj8wyq4fxk28k6iy2"}
   */
  dimension?: { [key: string]: string };
  /**
   * @remarks
   * The entity domain, such as acs.
   * 
   * @example
   * acs
   */
  entityDomain?: string;
  /**
   * @remarks
   * The UModel entity ID, which corresponds to the __entity_id__ field of the entity and identifies a member of the observation group together with entityDomain and entityType.
   * 
   * @example
   * i-bp1gj8wyq4fxk28k6iy2
   */
  entityId?: string;
  /**
   * @remarks
   * The role of the entity in the observation group. main indicates the primary entity directly matched by the management rule. related indicates the child entity managed through associations.
   * 
   * @example
   * main
   */
  entityRole?: string;
  /**
   * @remarks
   * The entity type, such as acs.ecs.instance.
   * 
   * @example
   * acs.ecs.instance
   */
  entityType?: string;
  /**
   * @remarks
   * The ID of the observation group to which the entity belongs.
   * 
   * @example
   * og-845e0a26455f437c
   */
  groupId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-bp1gj8wyq4fxk28k6iy2
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * ecs-prod-01
   */
  instanceName?: string;
  /**
   * @remarks
   * The ID of the region to which the instance belongs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-acfm3gn5i6bigbi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The key-value pairs of the instance tags.
   * 
   * @example
   * {"env":"prod"}
   */
  tags?: { [key: string]: string };
  /**
   * @remarks
   * The UID of the user that owns the instance.
   * 
   * @example
   * 1234567890123456
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      dimension: 'dimension',
      entityDomain: 'entityDomain',
      entityId: 'entityId',
      entityRole: 'entityRole',
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
      entityId: 'string',
      entityRole: 'string',
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

