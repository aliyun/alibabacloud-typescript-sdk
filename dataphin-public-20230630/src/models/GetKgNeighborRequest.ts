// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKgNeighborRequestNeighborsQuery extends $dara.Model {
  /**
   * @remarks
   * The maximum depth of neighbor nodes. Default value: 1.
   * 
   * @example
   * 2
   */
  depth?: number;
  /**
   * @remarks
   * The direction type. Valid values:
   * - in: the current entity is the target node.
   * - out: the current entity is the source node.
   * - both: the current entity is both the source node and the target node.
   * 
   * Default value: both.
   * 
   * @example
   * both
   */
  directionType?: string;
  /**
   * @remarks
   * The list of relation types.
   */
  relationTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      depth: 'Depth',
      directionType: 'DirectionType',
      relationTypes: 'RelationTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      depth: 'number',
      directionType: 'string',
      relationTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.relationTypes)) {
      $dara.Model.validateArray(this.relationTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKgNeighborRequest extends $dara.Model {
  /**
   * @remarks
   * The entity record data ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  entityDataId?: string;
  /**
   * @remarks
   * The entity type.
   * 
   * This parameter is required.
   * 
   * @example
   * Student
   */
  entityType?: string;
  /**
   * @remarks
   * The entity record neighbor node query instruction.
   */
  neighborsQuery?: GetKgNeighborRequestNeighborsQuery;
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @example
   * 30001011
   */
  opUserId?: string;
  /**
   * @remarks
   * The model ID.
   * 
   * This parameter is required.
   * 
   * @example
   * f1d4559a4db044158305e2d89bccf81f
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      entityDataId: 'EntityDataId',
      entityType: 'EntityType',
      neighborsQuery: 'NeighborsQuery',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityDataId: 'string',
      entityType: 'string',
      neighborsQuery: GetKgNeighborRequestNeighborsQuery,
      opTenantId: 'number',
      opUserId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.neighborsQuery && typeof (this.neighborsQuery as any).validate === 'function') {
      (this.neighborsQuery as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

