// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMetadataInfosRequest extends $dara.Model {
  env?: string;
  namespaceId?: number;
  namespaceName?: string;
  orderBy?: string;
  orderDirection?: string;
  orgId?: number;
  pageNumber?: number;
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  pbcId?: number;
  static names(): { [key: string]: string } {
    return {
      env: 'env',
      namespaceId: 'namespace_id',
      namespaceName: 'namespace_name',
      orderBy: 'order_by',
      orderDirection: 'order_direction',
      orgId: 'org_id',
      pageNumber: 'page_number',
      pageSize: 'page_size',
      pbcId: 'pbc_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      namespaceId: 'number',
      namespaceName: 'string',
      orderBy: 'string',
      orderDirection: 'string',
      orgId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      pbcId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

