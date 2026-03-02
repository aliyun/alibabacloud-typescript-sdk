// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PdpServiceRoleCreateCmd extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  companyId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pbcId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  serviceId?: number;
  static names(): { [key: string]: string } {
    return {
      companyId: 'companyId',
      name: 'name',
      pbcId: 'pbcId',
      serviceId: 'serviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyId: 'number',
      name: 'string',
      pbcId: 'number',
      serviceId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

