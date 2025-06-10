// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DetectCovid19CadAdvanceRequestURLList } from "./DetectCovid19cadAdvanceRequestUrllist";


export class DetectCovid19CadAdvanceRequest extends $dara.Model {
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
   * 0001
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
  URLList?: DetectCovid19CadAdvanceRequestURLList[];
  static names(): { [key: string]: string } {
    return {
      dataFormat: 'DataFormat',
      orgId: 'OrgId',
      orgName: 'OrgName',
      URLList: 'URLList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataFormat: 'string',
      orgId: 'string',
      orgName: 'string',
      URLList: { 'type': 'array', 'itemType': DetectCovid19CadAdvanceRequestURLList },
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

