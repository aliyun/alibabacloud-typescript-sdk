// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHotspotTrackingResponseBodyDataFlame extends $dara.Model {
  columns?: string[];
  values?: string[][];
  static names(): { [key: string]: string } {
    return {
      columns: 'columns',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: { 'type': 'array', 'itemType': 'string' },
      values: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': 'string' } },
    };
  }

  validate() {
    if(Array.isArray(this.columns)) {
      $dara.Model.validateArray(this.columns);
    }
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotspotTrackingResponseBodyDataSeries extends $dara.Model {
  columns?: string[];
  values?: string[][];
  static names(): { [key: string]: string } {
    return {
      columns: 'columns',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: { 'type': 'array', 'itemType': 'string' },
      values: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': 'string' } },
    };
  }

  validate() {
    if(Array.isArray(this.columns)) {
      $dara.Model.validateArray(this.columns);
    }
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotspotTrackingResponseBodyData extends $dara.Model {
  flame?: GetHotspotTrackingResponseBodyDataFlame;
  series?: GetHotspotTrackingResponseBodyDataSeries;
  static names(): { [key: string]: string } {
    return {
      flame: 'flame',
      series: 'series',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flame: GetHotspotTrackingResponseBodyDataFlame,
      series: GetHotspotTrackingResponseBodyDataSeries,
    };
  }

  validate() {
    if(this.flame && typeof (this.flame as any).validate === 'function') {
      (this.flame as any).validate();
    }
    if(this.series && typeof (this.series as any).validate === 'function') {
      (this.series as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotspotTrackingResponseBody extends $dara.Model {
  /**
   * @example
   * SysomOpenAPI.ServerError
   */
  code?: string;
  data?: GetHotspotTrackingResponseBodyData;
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @example
   * 2D693121-C925-5154-8DF6-C09A8B369822
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetHotspotTrackingResponseBodyData,
      message: 'string',
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

