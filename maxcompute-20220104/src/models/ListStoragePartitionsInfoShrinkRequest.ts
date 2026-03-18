// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStoragePartitionsInfoShrinkRequest extends $dara.Model {
  ascOrder?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  date?: string;
  orderColumn?: string;
  pageNumber?: number;
  pageSize?: number;
  partitionPrefix?: string;
  region?: string;
  schema?: string;
  tenantId?: string;
  typesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      ascOrder: 'ascOrder',
      date: 'date',
      orderColumn: 'orderColumn',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      partitionPrefix: 'partitionPrefix',
      region: 'region',
      schema: 'schema',
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
      partitionPrefix: 'string',
      region: 'string',
      schema: 'string',
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

