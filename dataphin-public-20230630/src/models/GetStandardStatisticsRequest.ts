// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStandardStatisticsRequestStatisticsQueryCreateTimePeriod extends $dara.Model {
  /**
   * @example
   * 2025-06-30 00:00:00
   */
  endTime?: string;
  includeEndTime?: boolean;
  /**
   * @example
   * 2025-06-01 00:00:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      includeEndTime: 'IncludeEndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      includeEndTime: 'boolean',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStandardStatisticsRequestStatisticsQuery extends $dara.Model {
  createTimePeriod?: GetStandardStatisticsRequestStatisticsQueryCreateTimePeriod;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * /dir1
   */
  directory?: string;
  standardStageList?: string[];
  static names(): { [key: string]: string } {
    return {
      createTimePeriod: 'CreateTimePeriod',
      directory: 'Directory',
      standardStageList: 'StandardStageList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimePeriod: GetStandardStatisticsRequestStatisticsQueryCreateTimePeriod,
      directory: 'string',
      standardStageList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.createTimePeriod && typeof (this.createTimePeriod as any).validate === 'function') {
      (this.createTimePeriod as any).validate();
    }
    if(Array.isArray(this.standardStageList)) {
      $dara.Model.validateArray(this.standardStageList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStandardStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  statisticsQuery?: GetStandardStatisticsRequestStatisticsQuery;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      statisticsQuery: 'StatisticsQuery',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      statisticsQuery: GetStandardStatisticsRequestStatisticsQuery,
    };
  }

  validate() {
    if(this.statisticsQuery && typeof (this.statisticsQuery as any).validate === 'function') {
      (this.statisticsQuery as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

