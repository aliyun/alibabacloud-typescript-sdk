// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLegacyQueueEventLogsRequest extends $dara.Model {
  /**
   * @remarks
   * End time, in UNIX timestamp format, in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1658026180018
   */
  endTime?: number;
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * Page number for paging, ranging from 1 to 1000.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size, ranging from 1 to 1000.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * Filter by skill group ID. This parameter is optional and defaults to empty. An empty value means no filtering is applied.
   * 
   * @example
   * skillgroup@ccc-test
   */
  skillGroupId?: string;
  /**
   * @remarks
   * Start Time, in UNIX timestamp format, in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1657939540015
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      skillGroupId: 'SkillGroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      skillGroupId: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

