// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCorpNumberRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to force delete an existing number.
   * 
   * @example
   * false
   */
  force?: boolean;
  /**
   * @remarks
   * The outbound number.
   * 
   * This parameter is required.
   * 
   * @example
   * 057100001234
   */
  number?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 1234567890
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      force: 'Force',
      number: 'Number',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      force: 'boolean',
      number: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

