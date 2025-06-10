// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DetectLungNoduleAdvanceRequestURLList } from "./DetectLungNoduleAdvanceRequestUrllist";


export class DetectLungNoduleAdvanceRequest extends $dara.Model {
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
   * @example
   * 0.60
   */
  threshold?: number;
  /**
   * @remarks
   * 1
   * 
   * This parameter is required.
   */
  URLList?: DetectLungNoduleAdvanceRequestURLList[];
  static names(): { [key: string]: string } {
    return {
      dataFormat: 'DataFormat',
      orgId: 'OrgId',
      orgName: 'OrgName',
      threshold: 'Threshold',
      URLList: 'URLList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataFormat: 'string',
      orgId: 'string',
      orgName: 'string',
      threshold: 'number',
      URLList: { 'type': 'array', 'itemType': DetectLungNoduleAdvanceRequestURLList },
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

