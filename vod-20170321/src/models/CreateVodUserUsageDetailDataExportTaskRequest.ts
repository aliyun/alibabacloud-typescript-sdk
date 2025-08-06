// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVodUserUsageDetailDataExportTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  dimension?: string;
  domainNames?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  endTime?: string;
  group?: string;
  language?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  startTime?: string;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      dimension: 'Dimension',
      domainNames: 'DomainNames',
      endTime: 'EndTime',
      group: 'Group',
      language: 'Language',
      ownerId: 'OwnerId',
      startTime: 'StartTime',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimension: 'string',
      domainNames: 'string',
      endTime: 'string',
      group: 'string',
      language: 'string',
      ownerId: 'number',
      startTime: 'string',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

