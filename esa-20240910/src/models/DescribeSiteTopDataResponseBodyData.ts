// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSiteTopDataResponseBodyDataDetailData } from "./DescribeSiteTopDataResponseBodyDataDetailData";


export class DescribeSiteTopDataResponseBodyData extends $dara.Model {
  detailData?: DescribeSiteTopDataResponseBodyDataDetailData[];
  /**
   * @example
   * ALL
   */
  dimensionName?: string;
  /**
   * @example
   * Traffic
   */
  fieldName?: string;
  static names(): { [key: string]: string } {
    return {
      detailData: 'DetailData',
      dimensionName: 'DimensionName',
      fieldName: 'FieldName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailData: { 'type': 'array', 'itemType': DescribeSiteTopDataResponseBodyDataDetailData },
      dimensionName: 'string',
      fieldName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.detailData)) {
      $dara.Model.validateArray(this.detailData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

