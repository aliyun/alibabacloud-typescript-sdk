// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDoctorHBaseTablesResponseBodyDataAnalysis extends $dara.Model {
  /**
   * @remarks
   * The regions that have read hotspot issues.
   * 
   * @example
   * null
   */
  readRequestHotspotRegionList?: string[];
  /**
   * @remarks
   * The description of read imbalance.
   * 
   * @example
   * read request unbalance is <p class=\\"report-detail-topic\\">
   */
  readRequestUnbalanceSuggestion?: string;
  /**
   * @remarks
   * The regions that have read/write hotspot issues.
   * 
   * @example
   * null
   */
  requestHotspotRegionList?: string[];
  /**
   * @remarks
   * The description of read/write imbalance.
   * 
   * @example
   * read request unbalance is <p class=\\"report-detail-topic\\">
   */
  requestUnbalanceSuggestion?: string;
  /**
   * @remarks
   * The score of the table.
   * 
   * @example
   * 67
   */
  tableScore?: number;
  /**
   * @remarks
   * The regions that have write hotspot issues.
   * 
   * @example
   * null
   */
  writeRequestHotspotRegionList?: string[];
  /**
   * @remarks
   * The description of write imbalance.
   * 
   * @example
   * write request unbalance is <p class=\\"report-detail-topic\\">
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

