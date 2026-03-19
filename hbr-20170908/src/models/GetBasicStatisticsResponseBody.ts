// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBasicStatisticsResponseBodyGlobalStatistics extends $dara.Model {
  /**
   * @example
   * 42949672960
   */
  protectedDataSize?: number;
  /**
   * @example
   * 5
   */
  protectedResourceCount?: number;
  static names(): { [key: string]: string } {
    return {
      protectedDataSize: 'ProtectedDataSize',
      protectedResourceCount: 'ProtectedResourceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      protectedDataSize: 'number',
      protectedResourceCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBasicStatisticsResponseBodyRegionStatistics extends $dara.Model {
  /**
   * @example
   * 42949672960
   */
  protectedDataSize?: number;
  /**
   * @example
   * 5
   */
  protectedResourceCount?: number;
  /**
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      protectedDataSize: 'ProtectedDataSize',
      protectedResourceCount: 'ProtectedResourceCount',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      protectedDataSize: 'number',
      protectedResourceCount: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBasicStatisticsResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  globalStatistics?: GetBasicStatisticsResponseBodyGlobalStatistics;
  /**
   * @example
   * successful
   */
  message?: string;
  regionStatistics?: GetBasicStatisticsResponseBodyRegionStatistics[];
  /**
   * @example
   * EB526A5D-1FE2-51C1-B790-1732C1DBA969
   */
  requestId?: string;
  /**
   * @example
   * ECS_FILE
   */
  sourceType?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      globalStatistics: 'GlobalStatistics',
      message: 'Message',
      regionStatistics: 'RegionStatistics',
      requestId: 'RequestId',
      sourceType: 'SourceType',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      globalStatistics: GetBasicStatisticsResponseBodyGlobalStatistics,
      message: 'string',
      regionStatistics: { 'type': 'array', 'itemType': GetBasicStatisticsResponseBodyRegionStatistics },
      requestId: 'string',
      sourceType: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.globalStatistics && typeof (this.globalStatistics as any).validate === 'function') {
      (this.globalStatistics as any).validate();
    }
    if(Array.isArray(this.regionStatistics)) {
      $dara.Model.validateArray(this.regionStatistics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

