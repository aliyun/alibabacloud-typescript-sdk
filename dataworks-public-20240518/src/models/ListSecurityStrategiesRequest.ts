// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSecurityStrategiesRequest extends $dara.Model {
  /**
   * @example
   * DataQuery
   */
  controlModule?: string;
  /**
   * @example
   * MyCatalog
   */
  controlSubModule?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      controlModule: 'ControlModule',
      controlSubModule: 'ControlSubModule',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      controlModule: 'string',
      controlSubModule: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

