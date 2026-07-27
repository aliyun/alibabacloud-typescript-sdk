// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKgNeighborRequestNeighborsQuery extends $dara.Model {
  /**
   * @example
   * 2
   */
  depth?: number;
  /**
   * @example
   * both
   */
  directionType?: string;
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
   * This parameter is required.
   * 
   * @example
   * 123
   */
  entityDataId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Student
   */
  entityType?: string;
  neighborsQuery?: GetKgNeighborRequestNeighborsQuery;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
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
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityDataId: 'string',
      entityType: 'string',
      neighborsQuery: GetKgNeighborRequestNeighborsQuery,
      opTenantId: 'number',
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

