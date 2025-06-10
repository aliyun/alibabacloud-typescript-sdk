// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ScreenChestCTRequestURLList } from "./ScreenChestCtrequestUrllist";


export class ScreenChestCTRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DICOM
   */
  dataFormat?: string;
  /**
   * @example
   * 4
   */
  mask?: number;
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
   * 
   * @example
   * weiyi
   */
  orgName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  URLList?: ScreenChestCTRequestURLList[];
  /**
   * @example
   * 0
   */
  verbose?: number;
  static names(): { [key: string]: string } {
    return {
      dataFormat: 'DataFormat',
      mask: 'Mask',
      orgId: 'OrgId',
      orgName: 'OrgName',
      URLList: 'URLList',
      verbose: 'Verbose',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataFormat: 'string',
      mask: 'number',
      orgId: 'string',
      orgName: 'string',
      URLList: { 'type': 'array', 'itemType': ScreenChestCTRequestURLList },
      verbose: 'number',
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

