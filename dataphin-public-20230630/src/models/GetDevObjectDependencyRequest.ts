// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDevObjectDependencyRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DATA_PROCESS
   */
  objectFrom?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 7026498387616064
   */
  objectId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 7026498387616064
   */
  objectType?: string;
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
   * 7021037162911616L
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      objectFrom: 'ObjectFrom',
      objectId: 'ObjectId',
      objectType: 'ObjectType',
      opTenantId: 'OpTenantId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectFrom: 'string',
      objectId: 'string',
      objectType: 'string',
      opTenantId: 'number',
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

