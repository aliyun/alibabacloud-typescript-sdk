// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUnknownThreatDetectMachineRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * test-ecs
   */
  remark?: string;
  /**
   * @example
   * studying
   */
  status?: string;
  /**
   * @example
   * hash
   */
  studyMode?: string;
  /**
   * @example
   * 1768891966346
   */
  studyTimeEnd?: number;
  /**
   * @example
   * 1768891966344
   */
  studyTimeStart?: number;
  /**
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

