// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRoutineRelatedRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The routine name.
   * 
   * This parameter is required.
   * 
   * @example
   * DeleteRoutineRelatedRecord
   */
  name?: string;
  /**
   * @remarks
   * The record ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  recordId?: number;
  /**
   * @remarks
   * The record name.
   * 
   * This parameter is required.
   * 
   * @example
   * test-xxx.example.com
   */
  recordName?: string;
  /**
   * @remarks
   * The website ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      recordId: 'RecordId',
      recordName: 'RecordName',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      recordId: 'number',
      recordName: 'string',
      siteId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

