// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the returned information. Valid values:
   * - zh: Chinese
   * - en: English
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The sorting order. This parameter is currently not used.
   * 
   * @example
   * false
   */
  descSort?: boolean;
  /**
   * @remarks
   * The filter parameters.
   */
  filterParamsShrink?: string;
  /**
   * @remarks
   * The order information.
   * 
   * @example
   * {}
   */
  orderItem?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of instances per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      descSort: 'DescSort',
      filterParamsShrink: 'FilterParams',
      orderItem: 'OrderItem',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      descSort: 'boolean',
      filterParamsShrink: 'string',
      orderItem: 'string',
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

