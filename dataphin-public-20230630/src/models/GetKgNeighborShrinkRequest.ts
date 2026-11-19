// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKgNeighborShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The data ID of the entity record.
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
   * The neighbor node query instruction for entity records.
   */
  neighborsQueryShrink?: string;
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
   * @remarks
   * The ID of the operator.
   * 
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
      neighborsQueryShrink: 'NeighborsQuery',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityDataId: 'string',
      entityType: 'string',
      neighborsQueryShrink: 'string',
      opTenantId: 'number',
      opUserId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

