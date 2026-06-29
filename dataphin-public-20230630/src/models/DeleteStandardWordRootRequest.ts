// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteStandardWordRootRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the root word.
   * 
   * This parameter is required.
   * 
   * @example
   * 平均值
   */
  name?: string;
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
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      opTenantId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

