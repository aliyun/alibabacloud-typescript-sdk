// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ScreenLCAdvanceRequestURLList } from "./ScreenLcadvanceRequestUrllist";


export class ScreenLCAdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DICOM
   */
  dataFormat?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * HTTP_FILES
   */
  dataSourceType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 7ff51bfe-e73d-11ea-827d-506b4b3f3cf6
   */
  orgId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  orgName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  URLList?: ScreenLCAdvanceRequestURLList[];
  static names(): { [key: string]: string } {
    return {
      dataFormat: 'DataFormat',
      dataSourceType: 'DataSourceType',
      orgId: 'OrgId',
      orgName: 'OrgName',
      URLList: 'URLList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataFormat: 'string',
      dataSourceType: 'string',
      orgId: 'string',
      orgName: 'string',
      URLList: { 'type': 'array', 'itemType': ScreenLCAdvanceRequestURLList },
    };
  }

  validate() {
    if(Array.isArray(this.URLList)) {
      $dara.Model.validateArray(this.URLList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

