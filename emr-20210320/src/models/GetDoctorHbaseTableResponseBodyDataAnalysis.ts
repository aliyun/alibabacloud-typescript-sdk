// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDoctorHBaseTableResponseBodyDataAnalysis extends $dara.Model {
  /**
   * @remarks
   * List of read hotspot regions.
   * 
   * @example
   * null
   */
  readRequestHotspotRegionList?: string[];
  /**
   * @remarks
   * Description of read imbalance.
   */
  readRequestUnbalanceSuggestion?: string;
  /**
   * @remarks
   * List of read/write hotspot regions.
   * 
   * @example
   * null
   */
  requestHotspotRegionList?: string[];
  /**
   * @remarks
   * Description of read/write imbalance.
   */
  requestUnbalanceSuggestion?: string;
  /**
   * @remarks
   * Table score.
   * 
   * @example
   * 85
   */
  tableScore?: number;
  /**
   * @remarks
   * List of write hotspot regions.
   * 
   * @example
   * null
   */
  writeRequestHotspotRegionList?: string[];
  /**
   * @remarks
   * Description of write imbalance.
   */
  writeRequestUnbalanceSuggestion?: string;
  static names(): { [key: string]: string } {
    return {
      readRequestHotspotRegionList: 'ReadRequestHotspotRegionList',
      readRequestUnbalanceSuggestion: 'ReadRequestUnbalanceSuggestion',
      requestHotspotRegionList: 'RequestHotspotRegionList',
      requestUnbalanceSuggestion: 'RequestUnbalanceSuggestion',
      tableScore: 'TableScore',
      writeRequestHotspotRegionList: 'WriteRequestHotspotRegionList',
      writeRequestUnbalanceSuggestion: 'WriteRequestUnbalanceSuggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      readRequestHotspotRegionList: { 'type': 'array', 'itemType': 'string' },
      readRequestUnbalanceSuggestion: 'string',
      requestHotspotRegionList: { 'type': 'array', 'itemType': 'string' },
      requestUnbalanceSuggestion: 'string',
      tableScore: 'number',
      writeRequestHotspotRegionList: { 'type': 'array', 'itemType': 'string' },
      writeRequestUnbalanceSuggestion: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.readRequestHotspotRegionList)) {
      $dara.Model.validateArray(this.readRequestHotspotRegionList);
    }
    if(Array.isArray(this.requestHotspotRegionList)) {
      $dara.Model.validateArray(this.requestHotspotRegionList);
    }
    if(Array.isArray(this.writeRequestHotspotRegionList)) {
      $dara.Model.validateArray(this.writeRequestHotspotRegionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

