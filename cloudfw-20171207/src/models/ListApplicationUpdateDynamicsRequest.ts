// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationUpdateDynamicsRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the returned information. Valid values:
   * - **zh**: Chinese. This is the default value.
   * - **en**: English.
   * This parameter determines whether the update description and application name are returned in Chinese or English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The page number. Pages start from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. The value must be greater than or equal to 1. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      pageNo: 'number',
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

