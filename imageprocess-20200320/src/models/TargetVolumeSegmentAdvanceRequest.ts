// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TargetVolumeSegmentAdvanceRequestURLList } from "./TargetVolumeSegmentAdvanceRequestUrllist";


export class TargetVolumeSegmentAdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * LUNG
   */
  cancerType?: string;
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
   * 
   * @example
   * GTV
   */
  targetVolumeType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  URLList?: TargetVolumeSegmentAdvanceRequestURLList[];
  static names(): { [key: string]: string } {
    return {
      cancerType: 'CancerType',
      dataFormat: 'DataFormat',
      orgId: 'OrgId',
      orgName: 'OrgName',
      targetVolumeType: 'TargetVolumeType',
      URLList: 'URLList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cancerType: 'string',
      dataFormat: 'string',
      orgId: 'string',
      orgName: 'string',
      targetVolumeType: 'string',
      URLList: { 'type': 'array', 'itemType': TargetVolumeSegmentAdvanceRequestURLList },
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

