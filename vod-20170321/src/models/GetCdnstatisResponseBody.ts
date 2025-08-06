// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCDNStatisResponseBodyCDNStatisListCDNMetric extends $dara.Model {
  bpsDataDomesticValue?: number;
  bpsDataOverseasValue?: number;
  bpsDataValue?: number;
  cdnDomain?: string;
  flowDataDomesticValue?: number;
  flowDataOverseasValue?: number;
  flowDataValue?: number;
  id?: number;
  statTime?: string;
  static names(): { [key: string]: string } {
    return {
      bpsDataDomesticValue: 'BpsDataDomesticValue',
      bpsDataOverseasValue: 'BpsDataOverseasValue',
      bpsDataValue: 'BpsDataValue',
      cdnDomain: 'CdnDomain',
      flowDataDomesticValue: 'FlowDataDomesticValue',
      flowDataOverseasValue: 'FlowDataOverseasValue',
      flowDataValue: 'FlowDataValue',
      id: 'Id',
      statTime: 'StatTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bpsDataDomesticValue: 'number',
      bpsDataOverseasValue: 'number',
      bpsDataValue: 'number',
      cdnDomain: 'string',
      flowDataDomesticValue: 'number',
      flowDataOverseasValue: 'number',
      flowDataValue: 'number',
      id: 'number',
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

export class GetCDNStatisResponseBodyCDNStatisList extends $dara.Model {
  CDNMetric?: GetCDNStatisResponseBodyCDNStatisListCDNMetric[];
  static names(): { [key: string]: string } {
    return {
      CDNMetric: 'CDNMetric',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CDNMetric: { 'type': 'array', 'itemType': GetCDNStatisResponseBodyCDNStatisListCDNMetric },
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

export class GetCDNStatisResponseBody extends $dara.Model {
  CDNStatisList?: GetCDNStatisResponseBodyCDNStatisList;
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
      CDNStatisList: GetCDNStatisResponseBodyCDNStatisList,
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

