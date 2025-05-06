// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListRemediationTemplatesResponseBodyRemediationTemplates } from "./ListRemediationTemplatesResponseBodyRemediationTemplates";


export class ListRemediationTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number. Pages start from page 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The queried remediation templates.
   */
  remediationTemplates?: ListRemediationTemplatesResponseBodyRemediationTemplates[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * FC2C4750-7024-499C-A69F-763543D1CBE3
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of remediation templates.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      remediationTemplates: 'RemediationTemplates',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      remediationTemplates: { 'type': 'array', 'itemType': ListRemediationTemplatesResponseBodyRemediationTemplates },
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.remediationTemplates)) {
      $dara.Model.validateArray(this.remediationTemplates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

