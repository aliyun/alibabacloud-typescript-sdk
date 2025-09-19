// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecurityCheckScheduleConfigResponseBodyRiskCheckJobConfig extends $dara.Model {
  /**
   * @remarks
   * The day of the week when the check tasks are performed. Multiple days can be specified. Multiple days are separated by commas (,).
   * 
   * *   **1**: Monday
   * *   **2**: Tuesday
   * *   **3**: Wednesday
   * *   **4**: Thursday
   * *   **5**: Friday
   * *   **6**: Saturday
   * *   **7**: Sunday
   * 
   * @example
   * 1,2,3
   */
  daysOfWeek?: string;
  /**
   * @remarks
   * The time range during which check tasks end. Valid values:
   * 
   * *   **6**: 00:00 to 06:00
   * *   **12**: 06:00 to 12:00
   * *   **18**: 12:00 to 18:00
   * *   **24**: 18:00 to 24:00
   * 
   * @example
   * 12
   */
  endTime?: number;
  /**
   * @remarks
   * The time range during which check tasks start. Valid values:
   * 
   * *   **0**: 00:00 to 06:00
   * *   **6**: 06:00 to 12:00
   * *   **12**: 12:00 to 18:00
   * *   **18**: 18:00 to 24:00
   * 
   * @example
   * 6
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      daysOfWeek: 'DaysOfWeek',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      daysOfWeek: 'string',
      endTime: 'number',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityCheckScheduleConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 48D2E9A9-A1B0-4295-B727-0995757C47E9
   */
  requestId?: string;
  /**
   * @remarks
   * The configurations of custom check tasks.
   */
  riskCheckJobConfig?: DescribeSecurityCheckScheduleConfigResponseBodyRiskCheckJobConfig;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      riskCheckJobConfig: 'RiskCheckJobConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      riskCheckJobConfig: DescribeSecurityCheckScheduleConfigResponseBodyRiskCheckJobConfig,
    };
  }

  validate() {
    if(this.riskCheckJobConfig && typeof (this.riskCheckJobConfig as any).validate === 'function') {
      (this.riskCheckJobConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

