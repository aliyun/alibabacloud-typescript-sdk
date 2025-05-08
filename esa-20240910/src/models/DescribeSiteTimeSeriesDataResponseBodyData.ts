// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSiteTimeSeriesDataResponseBodyDataDetailData } from "./DescribeSiteTimeSeriesDataResponseBodyDataDetailData";


export class DescribeSiteTimeSeriesDataResponseBodyData extends $dara.Model {
  detailData?: DescribeSiteTimeSeriesDataResponseBodyDataDetailData[];
  /**
   * @example
   * ALL
   */
  dimensionName?: string;
  /**
   * @example
   * ALL
   */
  dimensionValue?: string;
  /**
   * @example
   * Traffic
   */
  fieldName?: string;
  static names(): { [key: string]: string } {
    return {
      detailData: 'DetailData',
      dimensionName: 'DimensionName',
      dimensionValue: 'DimensionValue',
      fieldName: 'FieldName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailData: { 'type': 'array', 'itemType': DescribeSiteTimeSeriesDataResponseBodyDataDetailData },
      dimensionName: 'string',
      dimensionValue: 'string',
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

