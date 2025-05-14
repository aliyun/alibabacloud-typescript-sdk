// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListMultiDimTableRecordsRequestFilter } from "./ListMultiDimTableRecordsRequestFilter";
import { ListMultiDimTableRecordsRequestTenantContext } from "./ListMultiDimTableRecordsRequestTenantContext";


export class ListMultiDimTableRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 101114
   */
  baseId?: string;
  filter?: ListMultiDimTableRecordsRequestFilter;
  /**
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAUUg5QSTWwHyeElt8z5z4Qo=
   */
  nextToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxx
   */
  sheetIdOrName?: string;
  tenantContext?: ListMultiDimTableRecordsRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      baseId: 'BaseId',
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      sheetIdOrName: 'SheetIdOrName',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseId: 'string',
      filter: ListMultiDimTableRecordsRequestFilter,
      maxResults: 'number',
      nextToken: 'string',
      sheetIdOrName: 'string',
      tenantContext: ListMultiDimTableRecordsRequestTenantContext,
    };
  }

  validate() {
    if(this.filter && typeof (this.filter as any).validate === 'function') {
      (this.filter as any).validate();
    }
    if(this.tenantContext && typeof (this.tenantContext as any).validate === 'function') {
      (this.tenantContext as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

