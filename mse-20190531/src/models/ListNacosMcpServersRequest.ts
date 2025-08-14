// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNacosMcpServersRequest extends $dara.Model {
  /**
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @example
   * mse-cn-st21ri2****
   */
  instanceId?: string;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * 5e3ee449-b5c0-4aee-b857-32c0acbebf26
   */
  namespaceId?: string;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * blur
   */
  search?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      instanceId: 'InstanceId',
      name: 'Name',
      namespaceId: 'NamespaceId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      search: 'Search',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      instanceId: 'string',
      name: 'string',
      namespaceId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      search: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

