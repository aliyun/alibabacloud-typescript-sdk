// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDevObjectDependencyRequest extends $dara.Model {
  /**
   * @remarks
   * The object source. Valid values:
   * - BLACK_BOX: logical table
   * - DATA_PROCESS: computing node
   * - PIPELINE: integration node
   * 
   * This parameter is required.
   * 
   * @example
   * DATA_PROCESS
   */
  objectFrom?: string;
  /**
   * @remarks
   * The object ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 7026498387616064
   */
  objectId?: string;
  /**
   * @remarks
   * The object type. Valid values:
   * - FILE_ID: file ID of a node
   * - MODEL_ID: logical table
   * 
   * This parameter is required.
   * 
   * @example
   * 7026498387616064
   */
  objectType?: string;
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
   * The operator ID.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 7021037162911616L
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      objectFrom: 'ObjectFrom',
      objectId: 'ObjectId',
      objectType: 'ObjectType',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectFrom: 'string',
      objectId: 'string',
      objectType: 'string',
      opTenantId: 'number',
      opUserId: 'string',
      projectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

