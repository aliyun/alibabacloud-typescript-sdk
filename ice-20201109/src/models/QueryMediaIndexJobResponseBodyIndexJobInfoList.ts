// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMediaIndexJobResponseBodyIndexJobInfoList extends $dara.Model {
  /**
   * @remarks
   * The end time of the indexing job.
   * 
   * @example
   * 2023-11-21 11:33:51
   */
  gmtFinish?: string;
  /**
   * @remarks
   * The time when the index job was submitted.
   * 
   * @example
   * 2023-11-21 11:33:50
   */
  gmtSubmit?: string;
  /**
   * @remarks
   * The index type. Valid values:
   * 
   * *   mm: large visual model.
   * *   face: face recognition.
   * *   aiLabel: smart tagging.
   * 
   * @example
   * mm
   */
  indexType?: string;
  /**
   * @remarks
   * The job status. Valid values:
   * 
   * *   Running
   * *   Success
   * *   Fail
   * 
   * @example
   * Success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      gmtFinish: 'GmtFinish',
      gmtSubmit: 'GmtSubmit',
      indexType: 'IndexType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtFinish: 'string',
      gmtSubmit: 'string',
      indexType: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

