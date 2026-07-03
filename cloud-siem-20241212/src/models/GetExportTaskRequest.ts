// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetExportTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the export task.
   * 
   * @example
   * 200013
   */
  exportId?: number;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - **zh** (default): Chinese.
   * 
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The region where the threat analysis data management center is deployed. Select a region based on your asset location. Valid values:
   * 
   * - cn-hangzhou: Your assets are in the Chinese mainland.
   * 
   * - ap-southeast-1: Your assets are outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of a member account. An administrator can use this parameter to operate as the specified member account.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  static names(): { [key: string]: string } {
    return {
      exportId: 'ExportId',
      lang: 'Lang',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportId: 'number',
      lang: 'string',
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

