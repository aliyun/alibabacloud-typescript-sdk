// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPdpConfigsRequest extends $dara.Model {
  orderBy?: string;
  orderDirection?: string;
  pageNumber?: number;
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  serviceGroupId?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      orderBy: 'orderBy',
      orderDirection: 'orderDirection',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      serviceGroupId: 'serviceGroupId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderBy: 'string',
      orderDirection: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      serviceGroupId: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

