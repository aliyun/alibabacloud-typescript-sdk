// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteResourceRequest extends $dara.Model {
  /**
   * @remarks
   * Remarks.
   * 
   * This parameter is required.
   * 
   * @example
   * 测试
   */
  comment?: string;
  /**
   * @remarks
   * Resource file ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10300010201
   */
  id?: number;
  /**
   * @remarks
   * Tenant ID.
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
   * Project ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1030111021
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      id: 'Id',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      id: 'number',
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

