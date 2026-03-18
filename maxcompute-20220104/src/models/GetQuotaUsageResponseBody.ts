// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQuotaUsageResponseBodyDataPlot extends $dara.Model {
  title?: string;
  type?: string;
  yAxis?: string[];
  static names(): { [key: string]: string } {
    return {
      title: 'title',
      type: 'type',
      yAxis: 'yAxis',
    };
  }

  static types(): { [key: string]: any } {
    return {
      title: 'string',
      type: 'string',
      yAxis: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.yAxis)) {
      $dara.Model.validateArray(this.yAxis);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaUsageResponseBodyData extends $dara.Model {
  metrics?: { [key: string]: any };
  plot?: GetQuotaUsageResponseBodyDataPlot[];
  static names(): { [key: string]: string } {
    return {
      metrics: 'metrics',
      plot: 'plot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metrics: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      plot: { 'type': 'array', 'itemType': GetQuotaUsageResponseBodyDataPlot },
    };
  }

  validate() {
    if(this.metrics) {
      $dara.Model.validateMap(this.metrics);
    }
    if(Array.isArray(this.plot)) {
      $dara.Model.validateArray(this.plot);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaUsageResponseBody extends $dara.Model {
  data?: GetQuotaUsageResponseBodyData;
  errorCode?: string;
  errorMsg?: string;
  httpCode?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      httpCode: 'httpCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetQuotaUsageResponseBodyData,
      errorCode: 'string',
      errorMsg: 'string',
      httpCode: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

