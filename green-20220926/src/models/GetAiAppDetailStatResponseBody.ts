// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAiAppDetailStatResponseBody extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * id-xxx
   */
  appId?: string;
  /**
   * @remarks
   * The average duration of model calls.
   * 
   * @example
   * 2.55
   */
  avgModelDuration?: number;
  /**
   * @remarks
   * The day-over-day change ratio of average model call duration.
   * 
   * @example
   * 0.05
   */
  avgModelDurationDau?: number;
  /**
   * @remarks
   * The number of model calls.
   * 
   * @example
   * 15
   */
  modelCount?: number;
  /**
   * @remarks
   * The day-over-day change ratio of model call count.
   * 
   * @example
   * 0.15
   */
  modelCountDau?: number;
  /**
   * @remarks
   * The ID assigned by the backend to uniquely identify a request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @remarks
   * The number of risk events.
   * 
   * @example
   * 1
   */
  riskEventCount?: number;
  /**
   * @remarks
   * The number of tokens consumed.
   * 
   * @example
   * 11000
   */
  tokenCount?: number;
  /**
   * @remarks
   * The day-over-day change ratio of token consumption count.
   * 
   * @example
   * -0.15
   */
  tokenCountDau?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      avgModelDuration: 'AvgModelDuration',
      avgModelDurationDau: 'AvgModelDurationDau',
      modelCount: 'ModelCount',
      modelCountDau: 'ModelCountDau',
      requestId: 'RequestId',
      riskEventCount: 'RiskEventCount',
      tokenCount: 'TokenCount',
      tokenCountDau: 'TokenCountDau',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      avgModelDuration: 'number',
      avgModelDurationDau: 'number',
      modelCount: 'number',
      modelCountDau: 'number',
      requestId: 'string',
      riskEventCount: 'number',
      tokenCount: 'number',
      tokenCountDau: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

