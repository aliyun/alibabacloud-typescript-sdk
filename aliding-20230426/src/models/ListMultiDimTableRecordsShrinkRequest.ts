// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMultiDimTableRecordsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 101114
   */
  baseId?: string;
  filterShrink?: string;
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
  tenantContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      baseId: 'BaseId',
      filterShrink: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      sheetIdOrName: 'SheetIdOrName',
      tenantContextShrink: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseId: 'string',
      filterShrink: 'string',
      maxResults: 'number',
      nextToken: 'string',
      sheetIdOrName: 'string',
      tenantContextShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

