// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBasicStatisticsResponseBodyGlobalStatistics extends $dara.Model {
  /**
   * @remarks
   * The backed-up data size, in bytes.
   * 
   * - When `SourceType` is set to `ECS_FILE`, this parameter represents the total capacity of backed-up Cloud Disks.
   * 
   * @example
   * 42949672960
   */
  protectedDataSize?: number;
  /**
   * @remarks
   * The number of backed-up resources.
   * 
   * - When `SourceType` is set to `ECS_FILE`, this parameter represents the number of backed-up ECS instances.
   * 
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
   * @remarks
   * The backed-up data size, in bytes.
   * 
   * - When `SourceType` is set to `ECS_FILE`, this parameter represents the total capacity of backed-up Cloud Disks.
   * 
   * @example
   * 42949672960
   */
  protectedDataSize?: number;
  /**
   * @remarks
   * The number of backed-up resources.
   * 
   * - When `SourceType` is set to `ECS_FILE`, this parameter represents the number of backed-up ECS instances.
   * 
   * @example
   * 5
   */
  protectedResourceCount?: number;
  /**
   * @remarks
   * The Region ID.
   * 
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
   * @remarks
   * The HTTP status code. A value of 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The Backup statistics for all regions.
   */
  globalStatistics?: GetBasicStatisticsResponseBodyGlobalStatistics;
  /**
   * @remarks
   * The response message. If the request is successful, `successful` is returned. If the request fails, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The Backup statistics for each region.
   */
  regionStatistics?: GetBasicStatisticsResponseBodyRegionStatistics[];
  /**
   * @remarks
   * The Request ID.
   * 
   * @example
   * EB526A5D-1FE2-51C1-B790-1732C1DBA969
   */
  requestId?: string;
  /**
   * @remarks
   * The data source type. The valid value is:
   * 
   * - **ECS_FILE**: ECS File Backup.
   * 
   * @example
   * ECS_FILE
   */
  sourceType?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * - true: The request was successful.
   * 
   * - false: The request failed.
   * 
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

