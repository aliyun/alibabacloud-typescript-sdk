// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLoginTokenResponseBodyPasswordStrategy extends $dara.Model {
  /**
   * @remarks
   * > This is a parameter only for internal use.
   */
  tenantAlternativeChars?: string[];
  /**
   * @remarks
   * > This is a parameter only for internal use.
   * 
   * @example
   * null
   */
  tenantPasswordLength?: string;
  static names(): { [key: string]: string } {
    return {
      tenantAlternativeChars: 'TenantAlternativeChars',
      tenantPasswordLength: 'TenantPasswordLength',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantAlternativeChars: { 'type': 'array', 'itemType': 'string' },
      tenantPasswordLength: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tenantAlternativeChars)) {
      $dara.Model.validateArray(this.tenantAlternativeChars);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

