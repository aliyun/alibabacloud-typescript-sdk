// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHotspotCompareResponseBodyDataFlame extends $dara.Model {
  /**
   * @remarks
   * The list of field names.
   */
  columns?: string[];
  /**
   * @remarks
   * The list of flame graph data.
   */
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

export class GetHotspotCompareResponseBodyDataSeriesInstance1 extends $dara.Model {
  /**
   * @remarks
   * The list of field names.
   */
  columns?: string[];
  /**
   * @remarks
   * The list of hot spot time series data.
   */
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

export class GetHotspotCompareResponseBodyDataSeriesInstance2 extends $dara.Model {
  /**
   * @remarks
   * The list of field names.
   */
  columns?: string[];
  /**
   * @remarks
   * The list of hot spot time series data.
   */
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

export class GetHotspotCompareResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The differential flame graph data.
   */
  flame?: GetHotspotCompareResponseBodyDataFlame;
  /**
   * @remarks
   * The hot spot time series 1.
   */
  seriesInstance1?: GetHotspotCompareResponseBodyDataSeriesInstance1;
  /**
   * @remarks
   * The hot spot time series 2.
   */
  seriesInstance2?: GetHotspotCompareResponseBodyDataSeriesInstance2;
  static names(): { [key: string]: string } {
    return {
      flame: 'flame',
      seriesInstance1: 'series_instance1',
      seriesInstance2: 'series_instance2',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flame: GetHotspotCompareResponseBodyDataFlame,
      seriesInstance1: GetHotspotCompareResponseBodyDataSeriesInstance1,
      seriesInstance2: GetHotspotCompareResponseBodyDataSeriesInstance2,
    };
  }

  validate() {
    if(this.flame && typeof (this.flame as any).validate === 'function') {
      (this.flame as any).validate();
    }
    if(this.seriesInstance1 && typeof (this.seriesInstance1 as any).validate === 'function') {
      (this.seriesInstance1 as any).validate();
    }
    if(this.seriesInstance2 && typeof (this.seriesInstance2 as any).validate === 'function') {
      (this.seriesInstance2 as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotspotCompareResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * SysomOpenAPI.ServerError
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetHotspotCompareResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2D693121-C925-5154-8DF6-C09A8B369822
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call was successful. Valid values:
   * - true: The call was successful.
   * - false: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetHotspotCompareResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

