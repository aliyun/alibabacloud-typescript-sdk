// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKgNeighborShrinkRequest extends $dara.Model {
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
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityDataId: 'string',
      entityType: 'string',
      neighborsQueryShrink: 'string',
      opTenantId: 'number',
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

