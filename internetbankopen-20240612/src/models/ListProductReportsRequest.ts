// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProductReportsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to return only the most recent active epoch report. If this parameter is omitted or set to false, the operation returns active reports within the last ten completed natural weeks in UTC+8, up to ten records. If set to true, the operation queries the most recent active report from all completed historical epochs, returning at most one record without the ten-week limit. Only true or false is accepted. If a string is passed, it must strictly use the lowercase characters true or false. Other values return InvalidParameter.LatestOnly. This operation does not support paging.
   */
  latestOnly?: boolean;
  /**
   * @remarks
   * The product code of the data product for which to query periodic reports. This must be consistent with the product code used when calling InvokeDataProduct. This parameter is required and allows only 1 to 128 ASCII letters, digits, periods (.), underscores (_), or hyphens (-). Leading and trailing spaces are not trimmed. If this parameter is missing or incorrectly formatted, InvalidParameter.ProductCode is returned. The query is limited to reports belonging to the current Alibaba Cloud account. If no available reports exist, an empty Reports array is returned.
   * 
   * This parameter is required.
   * 
   * @example
   * cloudsec.demo.v1
   */
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      latestOnly: 'LatestOnly',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      latestOnly: 'boolean',
      productCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

