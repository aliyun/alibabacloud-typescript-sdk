// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SegmentLymphNodeAdvanceRequestURLList } from "./SegmentLymphNodeAdvanceRequestUrllist";


export class SegmentLymphNodeAdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CHEST
   */
  bodyPart?: string;
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
   * 1
   */
  orgId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  orgName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  URLList?: SegmentLymphNodeAdvanceRequestURLList[];
  static names(): { [key: string]: string } {
    return {
      bodyPart: 'BodyPart',
      dataFormat: 'DataFormat',
      orgId: 'OrgId',
      orgName: 'OrgName',
      URLList: 'URLList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyPart: 'string',
      dataFormat: 'string',
      orgId: 'string',
      orgName: 'string',
      URLList: { 'type': 'array', 'itemType': SegmentLymphNodeAdvanceRequestURLList },
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

