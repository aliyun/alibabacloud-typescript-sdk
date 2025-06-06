// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PageQueryWhiteListSettingResponseBodyResultObject extends $dara.Model {
  /**
   * @example
   * 330103xxxxxxxxxxxx
   */
  certNo?: string;
  /**
   * @example
   * sha43d9cabd52d370d9f4cca9468f71e
   */
  certifyId?: string;
  /**
   * @example
   * 2024-08-30 14:00:00
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-08-30 14:00:00
   */
  gmtModified?: string;
  /**
   * @example
   * 234822
   */
  id?: number;
  /**
   * @example
   * test
   */
  remark?: string;
  /**
   * @example
   * 1000000332
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
   * 2024-09-02 13:57:51
   */
  validEndDate?: string;
  /**
   * @example
   * 2024-08-30 13:57:51
   */
  validStartDate?: string;
  static names(): { [key: string]: string } {
    return {
      certNo: 'CertNo',
      certifyId: 'CertifyId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      remark: 'Remark',
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
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      remark: 'string',
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

