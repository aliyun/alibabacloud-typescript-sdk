// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SegmentOARRequestURLList } from "./SegmentOarrequestUrllist";


export class SegmentOARRequest extends $dara.Model {
  /**
   * @example
   * CHEST
   */
  bodyPart?: string;
  /**
   * @example
   * true
   */
  contrast?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * NIFTI
   */
  dataFormat?: string;
  maskList?: number[];
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
  URLList?: SegmentOARRequestURLList[];
  static names(): { [key: string]: string } {
    return {
      bodyPart: 'BodyPart',
      contrast: 'Contrast',
      dataFormat: 'DataFormat',
      maskList: 'MaskList',
      orgId: 'OrgId',
      orgName: 'OrgName',
      URLList: 'URLList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyPart: 'string',
      contrast: 'boolean',
      dataFormat: 'string',
      maskList: { 'type': 'array', 'itemType': 'number' },
      orgId: 'string',
      orgName: 'string',
      URLList: { 'type': 'array', 'itemType': SegmentOARRequestURLList },
    };
  }

  validate() {
    if(Array.isArray(this.maskList)) {
      $dara.Model.validateArray(this.maskList);
    }
    if(Array.isArray(this.URLList)) {
      $dara.Model.validateArray(this.URLList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

