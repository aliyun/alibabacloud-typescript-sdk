// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUnknownThreatDetectMachineRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the current page when using paging.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  eventStatus?: number;
  /**
   * @remarks
   * The maximum number of entries per page when using paging.
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
   * The running status of the machine. Valid values:
   * 
   * - **monitoring**: Warning.
   * - **blocking**: Blocking.
   * - **studying**: Learning.
   * - **study_finish**: Learning completed.
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
   * - **path**: process path
   * 
   * @example
   * hash
   */
  studyMode?: string;
  /**
   * @remarks
   * The end of the model creation time range. The value is a timestamp in milliseconds.
   * 
   * @example
   * 1768891966346
   */
  studyTimeEnd?: number;
  /**
   * @remarks
   * The start of the model creation time range. The value is a timestamp in milliseconds.
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
      eventStatus: 'EventStatus',
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
      eventStatus: 'number',
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

