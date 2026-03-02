// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CatalogPbcRoleCreateCmd extends $dara.Model {
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
   * 
   * @example
   * 1
   */
  marketId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * neuron:catalog:market
   */
  marketResource?: string;
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
   * neuron:catalog:company
   */
  pbcResource?: string;
  static names(): { [key: string]: string } {
    return {
      companyId: 'companyId',
      marketId: 'marketId',
      marketResource: 'marketResource',
      name: 'name',
      pbcResource: 'pbcResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyId: 'number',
      marketId: 'number',
      marketResource: 'string',
      name: 'string',
      pbcResource: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

