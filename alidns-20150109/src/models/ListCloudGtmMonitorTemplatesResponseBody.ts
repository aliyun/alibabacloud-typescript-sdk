// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCloudGtmMonitorTemplatesResponseBodyTemplates } from "./ListCloudGtmMonitorTemplatesResponseBodyTemplates";


export class ListCloudGtmMonitorTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Current page number, starting from 1, default is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of rows per page when paginating queries, with a maximum value of 100 and a default of 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Unique request identification code.
   * 
   * @example
   * 75446CC1-FC9A-4595-8D96-089D73D7A63D
   */
  requestId?: string;
  /**
   * @remarks
   * The health check templates.
   */
  templates?: ListCloudGtmMonitorTemplatesResponseBodyTemplates;
  /**
   * @remarks
   * Total number of health check template entries retrieved.
   * 
   * @example
   * 30
   */
  totalItems?: number;
  /**
   * @remarks
   * Total number of pages after data pagination.
   * 
   * @example
   * 2
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      templates: 'Templates',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      templates: ListCloudGtmMonitorTemplatesResponseBodyTemplates,
      totalItems: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(this.templates && typeof (this.templates as any).validate === 'function') {
      (this.templates as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

