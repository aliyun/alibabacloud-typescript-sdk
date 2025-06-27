// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchCloudGtmMonitorTemplatesResponseBodyTemplates } from "./SearchCloudGtmMonitorTemplatesResponseBodyTemplates";


export class SearchCloudGtmMonitorTemplatesResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 536E9CAD-DB30-4647-AC87-AA5CC38C5382
   */
  requestId?: string;
  /**
   * @remarks
   * The health check templates.
   */
  templates?: SearchCloudGtmMonitorTemplatesResponseBodyTemplates;
  /**
   * @example
   * 1
   */
  totalItems?: number;
  /**
   * @example
   * 1
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
      templates: SearchCloudGtmMonitorTemplatesResponseBodyTemplates,
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

