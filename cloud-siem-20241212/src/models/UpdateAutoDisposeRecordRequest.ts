// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAutoDisposeRecordRequest extends $dara.Model {
  autoDecisionConclusion?: string;
  /**
   * @example
   * [{"entityType":"file","entityName":"/path/file.file","entityUuid":"b7efb45ce7ff09758****","disposalMethod":"delete","playbookUuid":"9213bhdjagdja****"}]
   */
  autoDecisionEntityList?: string;
  /**
   * @example
   * success
   */
  autoDecisionResult?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4227e0cdc4b7efb45ce7ff09758****
   */
  autoDisposeRecordId?: string;
  /**
   * @remarks
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

