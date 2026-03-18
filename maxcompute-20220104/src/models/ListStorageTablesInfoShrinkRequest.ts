// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStorageTablesInfoShrinkRequest extends $dara.Model {
  ascOrder?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  date?: string;
  orderColumn?: string;
  pageNumber?: number;
  pageSize?: number;
  recentDays?: number;
  region?: string;
  schema?: string;
  tablePrefix?: string;
  tenantId?: string;
  typesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      ascOrder: 'ascOrder',
      date: 'date',
      orderColumn: 'orderColumn',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      recentDays: 'recentDays',
      region: 'region',
      schema: 'schema',
      tablePrefix: 'tablePrefix',
      tenantId: 'tenantId',
      typesShrink: 'types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ascOrder: 'boolean',
      date: 'string',
      orderColumn: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      recentDays: 'number',
      region: 'string',
      schema: 'string',
      tablePrefix: 'string',
      tenantId: 'string',
      typesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

