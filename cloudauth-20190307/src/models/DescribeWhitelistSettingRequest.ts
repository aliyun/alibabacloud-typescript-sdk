// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWhitelistSettingRequest extends $dara.Model {
  /**
   * @remarks
   * ID Number
   * 
   * @example
   * 320321XXXXXXXX701X
   */
  certNo?: string;
  /**
   * @remarks
   * Certification ID
   * 
   * @example
   * shsf57a4e0d9981c3bd66dc754f3d3cd
   */
  certifyId?: string;
  /**
   * @remarks
   * Pagination parameter: current page number, default value is 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Specify the language to query. Values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Number of items per page for pagination.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Scene ID.
   * 
   * @example
   * 1000004530
   */
  sceneId?: number;
  /**
   * @remarks
   * Service Code:
   * - **Enhanced Financial Grade**: cloudauthst
   * - **Financial Grade**: antcloudauth
   * 
   * This parameter is required.
   * 
   * @example
   * antcloudauth
   */
  serviceCode?: string;
  /**
   * @remarks
   * Visitor\\"s source IP address.
   * 
   * @example
   * 113.140.85.74
   */
  sourceIp?: string;
  /**
   * @remarks
   * Whitelist status:
   * - **VALID**: Valid
   * - **INVALID**: Invalid
   * - **DELETED**: Deleted
   * 
   * @example
   * VALID
   */
  status?: string;
  /**
   * @remarks
   * Expiration date.
   * 
   * @example
   * 1730304000000
   */
  validEndDate?: number;
  /**
   * @remarks
   * Effective start time (in seconds timestamp).
   * 
   * @example
   * 1759939200000
   */
  validStartDate?: number;
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

