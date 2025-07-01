// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeMountedClientsResponseBodyClients } from "./DescribeMountedClientsResponseBodyClients";


export class DescribeMountedClientsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried clients.
   */
  clients?: DescribeMountedClientsResponseBodyClients;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of IP addresses returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A70BEE5D-76D3-49FB-B58F-1F398211****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of IP addresses.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      clients: 'Clients',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clients: DescribeMountedClientsResponseBodyClients,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.clients && typeof (this.clients as any).validate === 'function') {
      (this.clients as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

