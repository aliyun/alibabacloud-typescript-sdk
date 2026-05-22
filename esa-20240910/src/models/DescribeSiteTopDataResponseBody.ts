// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSiteTopDataResponseBodyDataDetailData extends $dara.Model {
  dimensionValue?: string;
  value?: any;
  static names(): { [key: string]: string } {
    return {
      dimensionValue: 'DimensionValue',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimensionValue: 'string',
      value: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteTopDataResponseBodyData extends $dara.Model {
  detailData?: DescribeSiteTopDataResponseBodyDataDetailData[];
  dimensionName?: string;
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

export class DescribeSiteTopDataResponseBody extends $dara.Model {
  data?: DescribeSiteTopDataResponseBodyData[];
  endTime?: string;
  requestId?: string;
  samplingRate?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      endTime: 'EndTime',
      requestId: 'RequestId',
      samplingRate: 'SamplingRate',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeSiteTopDataResponseBodyData },
      endTime: 'string',
      requestId: 'string',
      samplingRate: 'number',
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

