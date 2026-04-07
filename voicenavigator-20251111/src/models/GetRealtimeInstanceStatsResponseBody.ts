// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRealtimeInstanceStatsResponseBodyDataRealtimeScriptStatsList extends $dara.Model {
  /**
   * @example
   * 13
   */
  configuredConcurrency?: number;
  /**
   * @example
   * 92836ced-6f3a-4cec-bc3d-c3893d3c7efa
   */
  scriptId?: string;
  /**
   * @example
   * TypeCombinationTest
   */
  scriptName?: string;
  /**
   * @example
   * 1774881208361
   */
  statsTime?: number;
  /**
   * @example
   * 10
   */
  usedConcurrency?: number;
  static names(): { [key: string]: string } {
    return {
      configuredConcurrency: 'ConfiguredConcurrency',
      scriptId: 'ScriptId',
      scriptName: 'ScriptName',
      statsTime: 'StatsTime',
      usedConcurrency: 'UsedConcurrency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuredConcurrency: 'number',
      scriptId: 'string',
      scriptName: 'string',
      statsTime: 'number',
      usedConcurrency: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRealtimeInstanceStatsResponseBodyData extends $dara.Model {
  /**
   * @example
   * 13
   */
  configuredConcurrency?: number;
  realtimeScriptStatsList?: GetRealtimeInstanceStatsResponseBodyDataRealtimeScriptStatsList[];
  /**
   * @example
   * 1774881208361
   */
  statsTime?: number;
  /**
   * @example
   * 10
   */
  usedConcurrency?: number;
  static names(): { [key: string]: string } {
    return {
      configuredConcurrency: 'ConfiguredConcurrency',
      realtimeScriptStatsList: 'RealtimeScriptStatsList',
      statsTime: 'StatsTime',
      usedConcurrency: 'UsedConcurrency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuredConcurrency: 'number',
      realtimeScriptStatsList: { 'type': 'array', 'itemType': GetRealtimeInstanceStatsResponseBodyDataRealtimeScriptStatsList },
      statsTime: 'number',
      usedConcurrency: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.realtimeScriptStatsList)) {
      $dara.Model.validateArray(this.realtimeScriptStatsList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRealtimeInstanceStatsResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: GetRealtimeInstanceStatsResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * SUCCESS
   */
  message?: string;
  params?: string[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 3a530dc0-7cfa-48f6-9539-bf9001e77b16
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      params: 'Params',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetRealtimeInstanceStatsResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

