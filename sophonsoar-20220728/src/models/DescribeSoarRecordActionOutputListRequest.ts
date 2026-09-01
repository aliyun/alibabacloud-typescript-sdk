// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSoarRecordActionOutputListRequest extends $dara.Model {
  /**
   * @remarks
   * The UUID of the component action.
   * 
   * > Call the [DescribeSoarTaskAndActions](~~DescribeSoarTaskAndActions~~) operation to get this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 2202c90d-fa93-4726-bc32-xxxxxx
   */
  actionUuid?: string;
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
   * 
   * - **zh**: Chinese
   * 
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The page number of the results to return. Default value: 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 20. If you leave this parameter empty, 10 entries are returned.
   * 
   * > We recommend that you specify a value for this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      actionUuid: 'ActionUuid',
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionUuid: 'string',
      lang: 'string',
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

