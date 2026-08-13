// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOutputFilesRequest extends $dara.Model {
  /**
   * @remarks
   * 产出明细类型: ppt/html/document/picture/slides/video/audio/email/others
   * 
   * @example
   * ppt
   */
  itemType?: string;
  /**
   * @remarks
   * 关键词搜索，匹配产出标题或明细名称
   * 
   * @example
   * string_value
   */
  keyword?: string;
  /**
   * @remarks
   * 数字员工（运营对象）名称，按名称过滤
   * 
   * @example
   * string_value
   */
  operatingObjectName?: string;
  /**
   * @remarks
   * 页码，从 1 开始
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * 每页数量，范围 1-100
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * 是否仅展示开启分享的产出和产出明细
   * 
   * @example
   * False
   */
  sharedOnly?: boolean;
  /**
   * @remarks
   * 租户ID，公共参数，缺省时使用调用方默认租户
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      itemType: 'itemType',
      keyword: 'keyword',
      operatingObjectName: 'operatingObjectName',
      page: 'page',
      pageSize: 'pageSize',
      sharedOnly: 'sharedOnly',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemType: 'string',
      keyword: 'string',
      operatingObjectName: 'string',
      page: 'number',
      pageSize: 'number',
      sharedOnly: 'boolean',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

