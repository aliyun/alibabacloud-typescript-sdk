// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDataDomainRequest extends $dara.Model {
  /**
   * @remarks
   * The business unit ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 6798087749072704
   */
  bizUnitId?: number;
  /**
   * @remarks
   * The subject domain ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1241844456
   */
  id?: number;
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
      bizUnitId: 'BizUnitId',
      id: 'Id',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizUnitId: 'number',
      id: 'number',
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

