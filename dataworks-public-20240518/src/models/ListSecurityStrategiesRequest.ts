// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSecurityStrategiesRequest extends $dara.Model {
  /**
   * @remarks
   * **The control module.**
   * 
   * @example
   * DataQuery
   */
  controlModule?: string;
  /**
   * @remarks
   * **The control submodule.**
   * 
   * @example
   * MyCatalog
   */
  controlSubModule?: string;
  /**
   * @remarks
   * The page number. Starts from 1. Default: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default: 20.
   * 
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

