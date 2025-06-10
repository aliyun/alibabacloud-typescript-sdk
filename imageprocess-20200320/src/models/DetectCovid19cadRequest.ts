// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DetectCovid19CadRequestURLList } from "./DetectCovid19cadRequestUrllist";


export class DetectCovid19CadRequest extends $dara.Model {
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
  URLList?: DetectCovid19CadRequestURLList[];
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
      URLList: { 'type': 'array', 'itemType': DetectCovid19CadRequestURLList },
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

