// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDoctorComputeSummaryRequestComponentInfo } from "./GetDoctorComputeSummaryRequestComponentInfo";


export class GetDoctorComputeSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c-b933c5aac8fe****
   */
  clusterId?: string;
  /**
   * @remarks
   * The resource information, which is used to filter the results.
   */
  componentInfo?: GetDoctorComputeSummaryRequestComponentInfo;
  /**
   * @remarks
   * Specify the date in the ISO 8601 standard. For example, 2023-01-01 represents January 1, 2023.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-01-01
   */
  dateTime?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      componentInfo: 'ComponentInfo',
      dateTime: 'DateTime',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      componentInfo: GetDoctorComputeSummaryRequestComponentInfo,
      dateTime: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(this.componentInfo && typeof (this.componentInfo as any).validate === 'function') {
      (this.componentInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

