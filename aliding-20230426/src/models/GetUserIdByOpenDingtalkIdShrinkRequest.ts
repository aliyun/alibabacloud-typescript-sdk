// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserIdByOpenDingtalkIdShrinkRequest extends $dara.Model {
  tenantContextShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DTOJdYJ2IQC4HuexhtjsSXXXX
   */
  openDingtalkId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantContextShrink: 'TenantContext',
      openDingtalkId: 'openDingtalkId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantContextShrink: 'string',
      openDingtalkId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

