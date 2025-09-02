// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceConsumeTimeRankRequest extends $dara.Model {
  /**
   * @remarks
   * The data timestamp, accurate to the day. Specify the time in the ISO 8601 standard in the yyyy-MM-dd\\"T\\"HH:mm:ssZ format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-09-21T00:00:00+0800
   */
  bizdate?: string;
  /**
   * @remarks
   * The DataWorks workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 100000
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      bizdate: 'Bizdate',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizdate: 'string',
      projectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

