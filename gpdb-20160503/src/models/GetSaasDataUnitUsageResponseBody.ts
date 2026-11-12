// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSaasDataUnitUsageResponseBodyDistribution extends $dara.Model {
  /**
   * @remarks
   * The exact non-negative decimal string. Floating-point or exponential formats are not used. The value is null when the amount is incomplete.
   * 
   * @example
   * 2.82
   * 
   * **if can be null:**
   * true
   */
  dataUnit?: string;
  /**
   * @remarks
   * The project attribution at the time of the call. The value is null when missing, which does not affect the total amount.
   * 
   * @example
   * project-1
   * 
   * **if can be null:**
   * true
   */
  projectId?: string;
  /**
   * @remarks
   * The project name. For the same scenario and project ID, the latest non-empty name snapshot within the query range is used. If multiple snapshots exist in the same second, the maximum value in lexicographical order is used. The value is null when missing.
   * 
   * @example
   * Scenario remake
   * 
   * **if can be null:**
   * true
   */
  projectName?: string;
  /**
   * @remarks
   * The business scenario code.
   * 
   * @example
   * drama_game_oneshot
   */
  usageScene?: string;
  /**
   * @remarks
   * The display name of the business scenario. This name is supplemented by a dictionary that maps the original Meta values to Chinese names, and is not an SLS field. UsageScene always retains the original log value. If no Chinese name is available, the original value is used as the name. Blank values are classified as other. Different codes with the same Chinese name are not merged.
   * 
   * @example
   * 游戏生成
   */
  usageSceneName?: string;
  static names(): { [key: string]: string } {
    return {
      dataUnit: 'DataUnit',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      usageScene: 'UsageScene',
      usageSceneName: 'UsageSceneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataUnit: 'string',
      projectId: 'string',
      projectName: 'string',
      usageScene: 'string',
      usageSceneName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSaasDataUnitUsageResponseBodySummary extends $dara.Model {
  /**
   * @remarks
   * The exact non-negative decimal string. Floating-point or exponential formats are not used. The value is null when the amount is incomplete.
   * 
   * @example
   * 2.82
   * 
   * **if can be null:**
   * true
   */
  dataUnit?: string;
  static names(): { [key: string]: string } {
    return {
      dataUnit: 'DataUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataUnit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSaasDataUnitUsageResponseBodyTimeSeriesScenes extends $dara.Model {
  /**
   * @remarks
   * The exact non-negative decimal string. Floating-point or exponential formats are not used. The value is null when the amount is incomplete.
   * 
   * @example
   * 2.82
   * 
   * **if can be null:**
   * true
   */
  dataUnit?: string;
  /**
   * @remarks
   * The project attribution at the time of the call. The value is null when missing, which does not affect the total amount.
   * 
   * @example
   * project-1
   * 
   * **if can be null:**
   * true
   */
  projectId?: string;
  /**
   * @remarks
   * The project name. For the same scenario and project ID, the latest non-empty name snapshot within the query range is used. If multiple snapshots exist in the same second, the maximum value in lexicographical order is used. The value is null when missing.
   * 
   * @example
   * Scenario remake
   * 
   * **if can be null:**
   * true
   */
  projectName?: string;
  /**
   * @remarks
   * The business scenario code.
   * 
   * @example
   * game_translation
   */
  usageScene?: string;
  static names(): { [key: string]: string } {
    return {
      dataUnit: 'DataUnit',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      usageScene: 'UsageScene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataUnit: 'string',
      projectId: 'string',
      projectName: 'string',
      usageScene: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSaasDataUnitUsageResponseBodyTimeSeries extends $dara.Model {
  /**
   * @remarks
   * The exact non-negative decimal string. Floating-point or exponential formats are not used. The value is null when the amount is incomplete.
   * 
   * @example
   * 2.82
   * 
   * **if can be null:**
   * true
   */
  dataUnit?: string;
  /**
   * @remarks
   * The scenario usage within the bucket.
   */
  scenes?: GetSaasDataUnitUsageResponseBodyTimeSeriesScenes[];
  /**
   * @remarks
   * The start time of the UTC bucket.
   * 
   * @example
   * 2026-10-20T00:00:00Z
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      dataUnit: 'DataUnit',
      scenes: 'Scenes',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataUnit: 'string',
      scenes: { 'type': 'array', 'itemType': GetSaasDataUnitUsageResponseBodyTimeSeriesScenes },
      time: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.scenes)) {
      $dara.Model.validateArray(this.scenes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSaasDataUnitUsageResponseBodyWarnings extends $dara.Model {
  /**
   * @remarks
   * The notification code. Valid values include DATA_INCOMPLETE and DATA_UNIT_PENDING.
   * 
   * @example
   * DATA_INCOMPLETE
   */
  code?: string;
  /**
   * @remarks
   * The notification message.
   * 
   * @example
   * Partial usage is not ready yet
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSaasDataUnitUsageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business distribution. The items are sorted in descending order of DataUnit. Items with unknown amounts are placed at the end. Items with the same value are sorted in ascending order of scenario code, project ID, and name. The items are grouped by scenario and project ID. Items without an ID but with a name are grouped by name. Records missing both are grouped as unassociated projects. The sum of all items in the complete result equals the summary. Missing or blank log scenarios are classified as other. Scenarios with values but no configured mapping retain the original values as codes and display names, and are normally included in the total. No empty rows are created for other if there are no records.
   */
  distribution?: GetSaasDataUnitUsageResponseBodyDistribution[];
  /**
   * @remarks
   * The actual end time of the query.
   * 
   * @example
   * 2026-10-20T02:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * mock_req_success
   */
  requestId?: string;
  /**
   * @remarks
   * The SaaS service ID.
   * 
   * @example
   * agdb-example
   */
  serviceId?: string;
  /**
   * @remarks
   * The actual start time of the query.
   * 
   * @example
   * 2026-10-20T00:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The usage summary.
   */
  summary?: GetSaasDataUnitUsageResponseBodySummary;
  /**
   * @remarks
   * The time trend. The items are sorted in ascending order of the UTC bucket start time. Zero buckets are padded for complete queries. The value is null for unknown amounts and is not replaced with zero.
   */
  timeSeries?: GetSaasDataUnitUsageResponseBodyTimeSeries[];
  /**
   * @remarks
   * The product notifications.
   */
  warnings?: GetSaasDataUnitUsageResponseBodyWarnings[];
  static names(): { [key: string]: string } {
    return {
      distribution: 'Distribution',
      endTime: 'EndTime',
      requestId: 'RequestId',
      serviceId: 'ServiceId',
      startTime: 'StartTime',
      summary: 'Summary',
      timeSeries: 'TimeSeries',
      warnings: 'Warnings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distribution: { 'type': 'array', 'itemType': GetSaasDataUnitUsageResponseBodyDistribution },
      endTime: 'string',
      requestId: 'string',
      serviceId: 'string',
      startTime: 'string',
      summary: GetSaasDataUnitUsageResponseBodySummary,
      timeSeries: { 'type': 'array', 'itemType': GetSaasDataUnitUsageResponseBodyTimeSeries },
      warnings: { 'type': 'array', 'itemType': GetSaasDataUnitUsageResponseBodyWarnings },
    };
  }

  validate() {
    if(Array.isArray(this.distribution)) {
      $dara.Model.validateArray(this.distribution);
    }
    if(this.summary && typeof (this.summary as any).validate === 'function') {
      (this.summary as any).validate();
    }
    if(Array.isArray(this.timeSeries)) {
      $dara.Model.validateArray(this.timeSeries);
    }
    if(Array.isArray(this.warnings)) {
      $dara.Model.validateArray(this.warnings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

