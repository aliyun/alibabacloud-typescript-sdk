// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataIngestionTemplatesRequest extends $dara.Model {
  dataIngestionTemplateStatus?: string;
  dataSourceTemplateIds?: string;
  lang?: string;
  pageNumber?: string;
  pageSize?: string;
  productId?: string;
  regionId?: string;
  roleFor?: number;
  static names(): { [key: string]: string } {
    return {
      dataIngestionTemplateStatus: 'DataIngestionTemplateStatus',
      dataSourceTemplateIds: 'DataSourceTemplateIds',
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      productId: 'ProductId',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataIngestionTemplateStatus: 'string',
      dataSourceTemplateIds: 'string',
      lang: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      productId: 'string',
      regionId: 'string',
      roleFor: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

