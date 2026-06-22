// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAttackPathEventStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request. The China Chinese Cloud generates a unique ID for each request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * 89AD16CC-97EE-50F3-9B12-9E28E5C8****
   */
  requestId?: string;
  /**
   * @remarks
   * The number of attack paths that require immediate handling.
   * 
   * @example
   * 1
   */
  seriousPathRiskNum?: number;
  /**
   * @remarks
   * The number of risky assets.
   * 
   * @example
   * 5
   */
  totalAssetRiskNum?: number;
  /**
   * @remarks
   * The number of risky paths.
   * 
   * @example
   * 10
   */
  totalPathRiskNum?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      seriousPathRiskNum: 'SeriousPathRiskNum',
      totalAssetRiskNum: 'TotalAssetRiskNum',
      totalPathRiskNum: 'TotalPathRiskNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      seriousPathRiskNum: 'number',
      totalAssetRiskNum: 'number',
      totalPathRiskNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

