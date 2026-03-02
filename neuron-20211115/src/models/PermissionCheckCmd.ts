// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PermissionCheckCmd extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * write
   */
  action?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  operatorId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * developer
   */
  operatorType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * neuron:catalog:company/1:pbc/2
   */
  resource?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      operatorId: 'operatorId',
      operatorType: 'operatorType',
      resource: 'resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      operatorId: 'string',
      operatorType: 'string',
      resource: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

