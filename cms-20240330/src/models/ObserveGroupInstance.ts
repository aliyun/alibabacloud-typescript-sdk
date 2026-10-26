// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ObserveGroupInstance extends $dara.Model {
  /**
   * @remarks
   * 实体分类（由 entityType 适配）。
   */
  category?: string;
  /**
   * @remarks
   * 监控维度键值对。
   */
  dimension?: { [key: string]: string };
  /**
   * @remarks
   * 实体域（如 acs）。
   */
  entityDomain?: string;
  /**
   * @remarks
   * 实体类型（如 acs.ecs.instance）。
   */
  entityType?: string;
  /**
   * @remarks
   * 所属观测分组 ID。
   */
  groupId?: string;
  /**
   * @remarks
   * 实例 ID。
   */
  instanceId?: string;
  /**
   * @remarks
   * 实例名称。
   */
  instanceName?: string;
  /**
   * @remarks
   * 实例所属地域 ID。
   */
  regionId?: string;
  /**
   * @remarks
   * 实例所属资源组 ID。
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * 实例标签键值对。
   */
  tags?: { [key: string]: string };
  /**
   * @remarks
   * 实例归属的用户 UID。
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

