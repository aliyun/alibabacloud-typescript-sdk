// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWebLockBindListRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the current page returned for a paging query. Pages start from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The language of the request and response. Valid values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page for a paging query. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The fuzzy match keyword for the server, which can be the server name or IP address.
   * 
   * @example
   * 192.168.XX.XX
   */
  remark?: string;
  /**
   * @remarks
   * The source IP address.
   * 
   * @example
   * 116.30.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The protection status of the servers to query. Valid values:
   * - **on**: Protection is enabled.
   * - **off**: Protection is disabled.
   * 
   * @example
   * on
   */
  status?: string;
  /**
   * @remarks
   * The UUID of the asset to query.
   * > You can call the [DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~) operation to obtain this parameter.
   * 
   * @example
   * 7151f27e-1d51-4e98-a540-8936a****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      lang: 'Lang',
      pageSize: 'PageSize',
      remark: 'Remark',
      sourceIp: 'SourceIp',
      status: 'Status',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      lang: 'string',
      pageSize: 'number',
      remark: 'string',
      sourceIp: 'string',
      status: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

