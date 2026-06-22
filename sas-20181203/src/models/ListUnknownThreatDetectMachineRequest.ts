// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUnknownThreatDetectMachineRequest extends $dara.Model {
  /**
   * @remarks
   * The page number to return.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of entries to return per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The server name or IP address.
   * 
   * @example
   * test-ecs
   */
  remark?: string;
  /**
   * @remarks
   * The status of the machine. Valid values:
   * 
   * - **monitoring**: Monitoring
   * 
   * - **blocking**: Blocking
   * 
   * - **studying**: Learning
   * 
   * - **study_finish**: Learning complete
   * 
   * @example
   * studying
   */
  status?: string;
  /**
   * @remarks
   * The whitelist mode. Valid values:
   * 
   * - **hash**: process hash
   * 
   * - **path**: process path
   * 
   * @example
   * hash
   */
  studyMode?: string;
  /**
   * @remarks
   * The end of the time range for model creation, specified as a timestamp in milliseconds.
   * 
   * @example
   * 1768891966346
   */
  studyTimeEnd?: number;
  /**
   * @remarks
   * The start of the time range for model creation, specified as a timestamp in milliseconds.
   * 
   * @example
   * 1768891966344
   */
  studyTimeStart?: number;
  /**
   * @remarks
   * The UUID of the server.
   * 
   * @example
   * d2d94e8b-bb25-4744-8004-1e08a53c****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      remark: 'Remark',
      status: 'Status',
      studyMode: 'StudyMode',
      studyTimeEnd: 'StudyTimeEnd',
      studyTimeStart: 'StudyTimeStart',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      remark: 'string',
      status: 'string',
      studyMode: 'string',
      studyTimeEnd: 'number',
      studyTimeStart: 'number',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

