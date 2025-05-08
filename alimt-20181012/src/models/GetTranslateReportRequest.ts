// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTranslateReportRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  apiName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2021-03-01 00:00:00
   */
  beginTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2021-03-01 23:59:59
   */
  endTime?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  group?: string;
  static names(): { [key: string]: string } {
    return {
      apiName: 'ApiName',
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      group: 'Group',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      beginTime: 'string',
      endTime: 'string',
      group: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

