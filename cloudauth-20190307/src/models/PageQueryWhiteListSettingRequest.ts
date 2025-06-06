// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PageQueryWhiteListSettingRequest extends $dara.Model {
  /**
   * @example
   * 330103xxxxxxxxxxxx
   */
  certNo?: string;
  /**
   * @example
   * sha75b4e19a1ddda059b920757b0e12b
   */
  certifyId?: string;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1000000xxx
   */
  sceneId?: number;
  /**
   * @example
   * antcloudauth
   */
  serviceCode?: string;
  /**
   * @example
   * VALID
   */
  status?: string;
  /**
   * @example
   * 1725379200000
   */
  validEndDate?: string;
  /**
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

