// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PageQueryWhiteListSettingRequest extends $dara.Model {
  /**
   * @remarks
   * ID number.
   * 
   * @example
   * 330103xxxxxxxxxxxx
   */
  certNo?: string;
  /**
   * @remarks
   * Unique identifier for real person authentication.
   * 
   * @example
   * sha75b4e19a1ddda059b920757b0e12b
   */
  certifyId?: string;
  /**
   * @remarks
   * Current page number, default is 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Number of items per page, default is 10
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Authentication scene ID. This ID is automatically generated after creating an authentication scene in the console. For how to create an authentication scene, see Adding an Authentication Scene.
   * 
   * @example
   * 1000000xxx
   */
  sceneId?: number;
  /**
   * @remarks
   * ServiceCode of the real person cloud product, value: **antcloudauth**.
   * 
   * @example
   * antcloudauth
   */
  serviceCode?: string;
  /**
   * @remarks
   * Status:
   * 
   * - DELETE: Deleted
   * - VALID: Not deleted and within the validity period, valid
   * - INVALID: Not deleted but outside the validity period, invalid
   * 
   * @example
   * VALID
   */
  status?: string;
  /**
   * @remarks
   * End date of validity (timestamp in milliseconds)
   * 
   * @example
   * 1725379200000
   */
  validEndDate?: string;
  /**
   * @remarks
   * Start date of validity (timestamp in milliseconds)
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

