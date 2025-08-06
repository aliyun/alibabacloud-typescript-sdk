// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCDNStatisSumResponseBodyCDNStatisListCDNMetric extends $dara.Model {
  bpsDataDomesticValue?: number;
  bpsDataOverseasValue?: number;
  bpsDataValue?: number;
  flowDataDomesticValue?: number;
  flowDataOverseasValue?: number;
  flowDataValue?: number;
  statTime?: string;
  static names(): { [key: string]: string } {
    return {
      bpsDataDomesticValue: 'BpsDataDomesticValue',
      bpsDataOverseasValue: 'BpsDataOverseasValue',
      bpsDataValue: 'BpsDataValue',
      flowDataDomesticValue: 'FlowDataDomesticValue',
      flowDataOverseasValue: 'FlowDataOverseasValue',
      flowDataValue: 'FlowDataValue',
      statTime: 'StatTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bpsDataDomesticValue: 'number',
      bpsDataOverseasValue: 'number',
      bpsDataValue: 'number',
      flowDataDomesticValue: 'number',
      flowDataOverseasValue: 'number',
      flowDataValue: 'number',
      statTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCDNStatisSumResponseBodyCDNStatisList extends $dara.Model {
  CDNMetric?: GetCDNStatisSumResponseBodyCDNStatisListCDNMetric[];
  static names(): { [key: string]: string } {
    return {
      CDNMetric: 'CDNMetric',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CDNMetric: { 'type': 'array', 'itemType': GetCDNStatisSumResponseBodyCDNStatisListCDNMetric },
    };
  }

  validate() {
    if(Array.isArray(this.CDNMetric)) {
      $dara.Model.validateArray(this.CDNMetric);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCDNStatisSumResponseBody extends $dara.Model {
  CDNStatisList?: GetCDNStatisSumResponseBodyCDNStatisList;
  maxBpsDataValue?: number;
  requestId?: string;
  sumFlowDataValue?: number;
  static names(): { [key: string]: string } {
    return {
      CDNStatisList: 'CDNStatisList',
      maxBpsDataValue: 'MaxBpsDataValue',
      requestId: 'RequestId',
      sumFlowDataValue: 'SumFlowDataValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CDNStatisList: GetCDNStatisSumResponseBodyCDNStatisList,
      maxBpsDataValue: 'number',
      requestId: 'string',
      sumFlowDataValue: 'number',
    };
  }

  validate() {
    if(this.CDNStatisList && typeof (this.CDNStatisList as any).validate === 'function') {
      (this.CDNStatisList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

