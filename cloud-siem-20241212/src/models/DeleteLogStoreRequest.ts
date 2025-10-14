// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLogStoreRequest extends $dara.Model {
  /**
   * @example
   * zh。
   */
  lang?: string;
  /**
   * @example
   * aliyun-cloudsiem-data-173326*******-cn-hangzhou
   */
  logProjectName?: string;
  /**
   * @example
   * cn-hangzhou。
   */
  logRegionId?: string;
  /**
   * @example
   * rds-logstore。
   */
  logStoreName?: string;
  /**
   * @example
   * 173326*******。
   */
  logUserId?: number;
  /**
   * @example
   * cn-hangzhou。
   */
  regionId?: string;
  /**
   * @example
   * 173326*******。
   */
  roleFor?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      logProjectName: 'LogProjectName',
      logRegionId: 'LogRegionId',
      logStoreName: 'LogStoreName',
      logUserId: 'LogUserId',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      logProjectName: 'string',
      logRegionId: 'string',
      logStoreName: 'string',
      logUserId: 'number',
      regionId: 'string',
      roleFor: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

