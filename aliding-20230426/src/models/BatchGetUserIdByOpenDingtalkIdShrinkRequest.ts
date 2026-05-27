// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchGetUserIdByOpenDingtalkIdShrinkRequest extends $dara.Model {
  tenantContextShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ["DTOJdYJ2IQC4HuexhtjsS8Qxxxx","D8301AKf6lmZbXiilcB4P2MVxxxx"]
   */
  openDingtalkIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      tenantContextShrink: 'TenantContext',
      openDingtalkIdsShrink: 'openDingtalkIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantContextShrink: 'string',
      openDingtalkIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

