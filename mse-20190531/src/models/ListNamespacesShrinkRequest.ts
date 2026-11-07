// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNamespacesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Language for displaying results. Values: zh (default): Chinese, en: English
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * Namespace name for fuzzy query. If not specified, all namespaces are queried by default.
   * 
   * @example
   * myNamespace
   */
  name?: string;
  /**
   * @remarks
   * Page number for paged query.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Number of entries per page for paged queries. The default is 5. To return more data, increase this value.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * Alibaba Cloud tags.
   */
  tagShrink?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      region: 'Region',
      tagShrink: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      region: 'string',
      tagShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

