// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EntityDiscoverRule } from "./EntityDiscoverRule";


export class EntityGroupBaseEntityQueries extends $dara.Model {
  /**
   * @example
   * acs.ecs.instance
   */
  entityType?: string;
  /**
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
  description?: string;
  /**
   * @example
   * eg-1234567890
   */
  entityGroupId?: string;
  entityGroupName?: string;
  entityQueries?: EntityGroupBaseEntityQueries[];
  entityRules?: EntityDiscoverRule;
  /**
   * @example
   * cn-heyuan
   */
  regionId?: string;
  /**
   * @example
   * 1654218***343050
   */
  userId?: string;
  /**
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

