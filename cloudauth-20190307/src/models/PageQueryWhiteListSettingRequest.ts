// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PageQueryWhiteListSettingRequest extends $dara.Model {
  /**
   * @remarks
   * The certificate number.
   * 
   * @example
   * 330103xxxxxxxxxxxx
   */
  certNo?: string;
  /**
   * @remarks
   * The unique identifier of the ID Verification request.
   * 
   * @example
   * sha75b4e19a1ddda059b920757b0e12b
   */
  certifyId?: string;
  /**
   * @remarks
   * The current page number. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The verification scenario ID. This ID is automatically generated after you create a verification scenario in the console. For more information about how to create a verification scenario, refer to Add a verification scenario.
   * 
   * @example
   * 1000000xxx
   */
  sceneId?: number;
  /**
   * @remarks
   * The ServiceCode of the ID Verification cloud service. Value: **antcloudauth**.
   * 
   * @example
   * antcloudauth
   */
  serviceCode?: string;
  /**
   * @remarks
   * The status. Valid values:
   * 
   * - DELETE: Deleted.
   * - VALID: Not deleted and within the validity period (valid).
   * - INVALID: Not deleted but outside the validity period (invalid).
   * 
   * @example
   * VALID
   */
  status?: string;
  /**
   * @remarks
   * The end date of the validity period (timestamp in milliseconds).
   * 
   * @example
   * 1725379200000
   */
  validEndDate?: string;
  /**
   * @remarks
   * The start date of the validity period (timestamp in milliseconds).
   * 
   * @example
   * 1725120000000
   */
  validStartDate?: string;
  static names(): { [key: string]: string } {
    return {
      certNo: 'CertNo',
      certifyId: 'CertifyId',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      sceneId: 'SceneId',
      serviceCode: 'ServiceCode',
      status: 'Status',
      validEndDate: 'ValidEndDate',
      validStartDate: 'ValidStartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certNo: 'string',
      certifyId: 'string',
      currentPage: 'number',
      pageSize: 'number',
      sceneId: 'number',
      serviceCode: 'string',
      status: 'string',
      validEndDate: 'string',
      validStartDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

