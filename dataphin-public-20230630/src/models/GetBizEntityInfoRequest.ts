// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBizEntityInfoRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 101001201
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
   * BIZ_OBJECT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      opTenantId: 'OpTenantId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      opTenantId: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

