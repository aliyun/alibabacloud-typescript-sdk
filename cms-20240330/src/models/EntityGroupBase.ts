// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EntityDiscoverRule } from "./EntityDiscoverRule";


export class EntityGroupBaseEntityQueries extends $dara.Model {
  /**
   * @remarks
   * 实体类型。
   * 
   * @example
   * acs.ecs.instance
   */
  entityType?: string;
  /**
   * @remarks
   * SPL查询语句。
   * 
   * @example
   * .entity with(type=\\"acs.ecs.instance\\") | where region_id in (\\"cn-beijing\\")
   */
  spl?: string;
  static names(): { [key: string]: string } {
    return {
      entityType: 'entityType',
      spl: 'spl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityType: 'string',
      spl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EntityGroupBase extends $dara.Model {
  /**
   * @remarks
   * 实体描述。
   * 
   * @example
   * ECS 实例
   */
  description?: string;
  /**
   * @remarks
   * 实体ID。
   * 
   * @example
   * eg-1234567890
   */
  entityGroupId?: string;
  /**
   * @remarks
   * 实体名称。
   * 
   * @example
   * ECS 全部实体
   */
  entityGroupName?: string;
  /**
   * @remarks
   * 实体查询规则集合。
   */
  entityQueries?: EntityGroupBaseEntityQueries[];
  /**
   * @remarks
   * 用于实体发现的规则。
   */
  entityRules?: EntityDiscoverRule;
  /**
   * @remarks
   * 地域ID。
   * 
   * @example
   * cn-heyuan
   */
  regionId?: string;
  /**
   * @remarks
   * 用户ID。
   * 
   * @example
   * 1654218***343050
   */
  userId?: string;
  /**
   * @remarks
   * 工作空间。
   * 
   * @example
   * default-cms-1654218***343050-cn-hangzhou
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      entityGroupId: 'entityGroupId',
      entityGroupName: 'entityGroupName',
      entityQueries: 'entityQueries',
      entityRules: 'entityRules',
      regionId: 'regionId',
      userId: 'userId',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      entityGroupId: 'string',
      entityGroupName: 'string',
      entityQueries: { 'type': 'array', 'itemType': EntityGroupBaseEntityQueries },
      entityRules: EntityDiscoverRule,
      regionId: 'string',
      userId: 'string',
      workspace: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.entityQueries)) {
      $dara.Model.validateArray(this.entityQueries);
    }
    if(this.entityRules && typeof (this.entityRules as any).validate === 'function') {
      (this.entityRules as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

