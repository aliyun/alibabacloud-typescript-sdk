// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDingtalkProjectionListShrinkRequest extends $dara.Model {
  tenantContextShrink?: string;
  /**
   * @example
   * PROJ001
   */
  code?: string;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 123456789
   */
  orgId?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 343242
   */
  projectorWorkNo?: string;
  static names(): { [key: string]: string } {
    return {
      tenantContextShrink: 'TenantContext',
      code: 'code',
      currentPage: 'currentPage',
      orgId: 'orgId',
      pageSize: 'pageSize',
      projectorWorkNo: 'projectorWorkNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantContextShrink: 'string',
      code: 'string',
      currentPage: 'number',
      orgId: 'number',
      pageSize: 'number',
      projectorWorkNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

