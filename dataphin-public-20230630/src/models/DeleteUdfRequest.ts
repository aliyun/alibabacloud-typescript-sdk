// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteUdfRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 测试
   */
  comment?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10300010201
   */
  id?: number;
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
   * 1030111021
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      id: 'Id',
      opTenantId: 'OpTenantId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      id: 'number',
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

