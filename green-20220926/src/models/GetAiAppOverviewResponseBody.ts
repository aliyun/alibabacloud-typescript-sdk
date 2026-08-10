// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAiAppOverviewResponseBody extends $dara.Model {
  /**
   * @remarks
   * The total number of agents.
   * 
   * @example
   * 100
   */
  appTotal?: number;
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
   * The distribution of risk events by level.
   */
  riskEventLevelDistribution?: { [key: string]: any };
  /**
   * @remarks
   * The total number of resolved risk events.
   * 
   * @example
   * 10
   */
  riskEventResolvedTotal?: number;
  /**
   * @remarks
   * The total number of risk events.
   * 
   * @example
   * 20
   */
  riskEventTotal?: number;
  /**
   * @remarks
   * The total number of unhandled risk events.
   * 
   * @example
   * 10
   */
  riskEventUnhandledTotal?: number;
  static names(): { [key: string]: string } {
    return {
      appTotal: 'AppTotal',
      requestId: 'RequestId',
      riskEventLevelDistribution: 'RiskEventLevelDistribution',
      riskEventResolvedTotal: 'RiskEventResolvedTotal',
      riskEventTotal: 'RiskEventTotal',
      riskEventUnhandledTotal: 'RiskEventUnhandledTotal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appTotal: 'number',
      requestId: 'string',
      riskEventLevelDistribution: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      riskEventResolvedTotal: 'number',
      riskEventTotal: 'number',
      riskEventUnhandledTotal: 'number',
    };
  }

  validate() {
    if(this.riskEventLevelDistribution) {
      $dara.Model.validateMap(this.riskEventLevelDistribution);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

