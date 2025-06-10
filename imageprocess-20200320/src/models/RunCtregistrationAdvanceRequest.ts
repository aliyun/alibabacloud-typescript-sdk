// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunCTRegistrationAdvanceRequestFloatingList } from "./RunCtregistrationAdvanceRequestFloatingList";
import { RunCTRegistrationAdvanceRequestReferenceList } from "./RunCtregistrationAdvanceRequestReferenceList";


export class RunCTRegistrationAdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * DICOM。
   * 
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
   */
  floatingList?: RunCTRegistrationAdvanceRequestFloatingList[];
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
  referenceList?: RunCTRegistrationAdvanceRequestReferenceList[];
  static names(): { [key: string]: string } {
    return {
      dataFormat: 'DataFormat',
      dataSourceType: 'DataSourceType',
      floatingList: 'FloatingList',
      orgId: 'OrgId',
      orgName: 'OrgName',
      referenceList: 'ReferenceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataFormat: 'string',
      dataSourceType: 'string',
      floatingList: { 'type': 'array', 'itemType': RunCTRegistrationAdvanceRequestFloatingList },
      orgId: 'string',
      orgName: 'string',
      referenceList: { 'type': 'array', 'itemType': RunCTRegistrationAdvanceRequestReferenceList },
    };
  }

  validate() {
    if(Array.isArray(this.floatingList)) {
      $dara.Model.validateArray(this.floatingList);
    }
    if(Array.isArray(this.referenceList)) {
      $dara.Model.validateArray(this.referenceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

