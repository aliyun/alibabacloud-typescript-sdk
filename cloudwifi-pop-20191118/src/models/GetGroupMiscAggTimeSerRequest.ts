// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGroupMiscAggTimeSerRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  apgroupUuid?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  appCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  end?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  start?: number;
  static names(): { [key: string]: string } {
    return {
      apgroupUuid: 'ApgroupUuid',
      appCode: 'AppCode',
      appName: 'AppName',
      end: 'End',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apgroupUuid: 'string',
      appCode: 'string',
      appName: 'string',
      end: 'number',
      start: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

