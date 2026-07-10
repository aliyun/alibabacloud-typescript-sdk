// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWhitelistSettingRequest extends $dara.Model {
  /**
   * @remarks
   * The ID card number.
   * 
   * @example
   * 320321XXXXXXXX701X
   */
  certNo?: string;
  /**
   * @remarks
   * The certification ID.
   * 
   * @example
   * shsf57a4e0d9981c3bd66dc754f3d3cd
   */
  certifyId?: string;
  /**
   * @remarks
   * The current page number. Default value: 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The language of the query result. Valid values:
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The number of entries per page in a paged query.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The scene ID.
   * 
   * @example
   * 1000004530
   */
  sceneId?: number;
  /**
   * @remarks
   * The service code. Valid values:
   * - **cloudauthst**: enhanced financial-grade edition.
   * - **antcloudauth**: financial-grade edition.
   * 
   * This parameter is required.
   * 
   * @example
   * antcloudauth
   */
  serviceCode?: string;
  /**
   * @remarks
   * The source IP address of the visitor.
   * 
   * @example
   * 113.140.85.74
   */
  sourceIp?: string;
  /**
   * @remarks
   * The whitelist status. Valid values:
   * - **VALID**: valid.
   * - **INVALID**: invalid.
   * - **DELETED**: deleted.
   * 
   * @example
   * VALID
   */
  status?: string;
  /**
   * @remarks
   * The end time of the validity period.
   * 
   * @example
   * 1730304000000
   */
  validEndDate?: number;
  /**
   * @remarks
   * The start time of the validity period. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1759939200000
   */
  validStartDate?: number;
  /**
   * @example
   * SUPER
   */
  whitelistType?: string;
  static names(): { [key: string]: string } {
    return {
      certNo: 'CertNo',
      certifyId: 'CertifyId',
      currentPage: 'CurrentPage',
      lang: 'Lang',
      pageSize: 'PageSize',
      sceneId: 'SceneId',
      serviceCode: 'ServiceCode',
      sourceIp: 'SourceIp',
      status: 'Status',
      validEndDate: 'ValidEndDate',
      validStartDate: 'ValidStartDate',
      whitelistType: 'WhitelistType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certNo: 'string',
      certifyId: 'string',
      currentPage: 'number',
      lang: 'string',
      pageSize: 'number',
      sceneId: 'number',
      serviceCode: 'string',
      sourceIp: 'string',
      status: 'string',
      validEndDate: 'number',
      validStartDate: 'number',
      whitelistType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

