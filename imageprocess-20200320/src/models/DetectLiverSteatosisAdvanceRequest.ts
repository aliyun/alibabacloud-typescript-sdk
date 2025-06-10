// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DetectLiverSteatosisAdvanceRequestURLList } from "./DetectLiverSteatosisAdvanceRequestUrllist";


export class DetectLiverSteatosisAdvanceRequest extends $dara.Model {
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
   * 
   * @example
   * HTTP_FILES
   */
  sourceType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  URLList?: DetectLiverSteatosisAdvanceRequestURLList[];
  static names(): { [key: string]: string } {
    return {
      dataFormat: 'DataFormat',
      orgId: 'OrgId',
      orgName: 'OrgName',
      sourceType: 'SourceType',
      URLList: 'URLList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataFormat: 'string',
      orgId: 'string',
      orgName: 'string',
      sourceType: 'string',
      URLList: { 'type': 'array', 'itemType': DetectLiverSteatosisAdvanceRequestURLList },
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

