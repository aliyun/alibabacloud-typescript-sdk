// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAutoDisposeRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The conclusion of the automatic alert analysis.
   * 
   * @example
   * 疑似误报
   */
  autoDecisionConclusion?: string;
  /**
   * @remarks
   * The list of entities for analysis.
   * 
   * @example
   * [{"entityType":"file","entityName":"/path/file.file","entityUuid":"b7efb45ce7ff09758****","disposalMethod":"delete","playbookUuid":"9213bhdjagdja****"}]
   */
  autoDecisionEntityList?: string;
  /**
   * @remarks
   * The analysis result.
   * 
   * @example
   * success
   */
  autoDecisionResult?: string;
  /**
   * @remarks
   * The unique ID of the analysis record.
   * 
   * This parameter is required.
   * 
   * @example
   * 4227e0cdc4b7efb45ce7ff09758****
   */
  autoDisposeRecordId?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - **zh** (default): Chinese.
   * 
   * - **en**: English.
   * 
   * This parameter is required.
   * 
   * @example
   * zh
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      autoDecisionConclusion: 'AutoDecisionConclusion',
      autoDecisionEntityList: 'AutoDecisionEntityList',
      autoDecisionResult: 'AutoDecisionResult',
      autoDisposeRecordId: 'AutoDisposeRecordId',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoDecisionConclusion: 'string',
      autoDecisionEntityList: 'string',
      autoDecisionResult: 'string',
      autoDisposeRecordId: 'string',
      lang: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

