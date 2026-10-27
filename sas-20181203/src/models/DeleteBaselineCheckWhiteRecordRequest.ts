// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteBaselineCheckWhiteRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The list of check item IDs.
   */
  checkIds?: number[];
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
   * 
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The list of whitelist record IDs.
   */
  recordIds?: number[];
  /**
   * @remarks
   * The data source. Valid values:
   * - **default**: server baseline
   * - **agentless**: agentless baseline
   * 
   * @example
   * agentless
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      checkIds: 'CheckIds',
      lang: 'Lang',
      recordIds: 'RecordIds',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkIds: { 'type': 'array', 'itemType': 'number' },
      lang: 'string',
      recordIds: { 'type': 'array', 'itemType': 'number' },
      source: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.checkIds)) {
      $dara.Model.validateArray(this.checkIds);
    }
    if(Array.isArray(this.recordIds)) {
      $dara.Model.validateArray(this.recordIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

