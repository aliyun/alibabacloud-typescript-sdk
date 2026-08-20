// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomOrgRequest extends $dara.Model {
  /**
   * @remarks
   * The corpId of the activated enterprise.
   * 
   * This parameter is required.
   * 
   * @example
   * exampleCorpId
   */
  corpId?: string;
  /**
   * @remarks
   * The organization name.
   * 
   * @example
   * string_value
   */
  corpName?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 692318833855074
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'corpId',
      corpName: 'corpName',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      corpName: 'string',
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

