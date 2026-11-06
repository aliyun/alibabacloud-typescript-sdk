// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataSourceTemplatesShrinkRequest extends $dara.Model {
  dataSourceTemplateIdsShrink?: string;
  lang?: string;
  pageNumber?: string;
  pageSize?: string;
  regionId?: string;
  roleFor?: number;
  static names(): { [key: string]: string } {
    return {
      dataSourceTemplateIdsShrink: 'DataSourceTemplateIds',
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceTemplateIdsShrink: 'string',
      lang: 'string',
      pageNumber: 'string',
      pageSize: 'string',
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

