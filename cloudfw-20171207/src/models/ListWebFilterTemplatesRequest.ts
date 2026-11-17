// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWebFilterTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the web filtering template. Fuzzy match is supported.
   * 
   * @example
   * URL access control
   */
  description?: string;
  /**
   * @remarks
   * The name of the web filtering template. Fuzzy match is supported.
   * 
   * @example
   * Web filtering template
   */
  name?: string;
  /**
   * @remarks
   * The page number. Pages start from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The status of the web filtering template. Exact match is supported. Valid values:
   * - **Enable**: Enabled.
   * - **Disable**: Disabled.
   * 
   * @example
   * Enable
   */
  status?: string;
  /**
   * @remarks
   * The IDs of the web filtering templates for batch exact matching. You can specify up to 100 template IDs.
   */
  webFilterTemplateIds?: string[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      status: 'Status',
      webFilterTemplateIds: 'WebFilterTemplateIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      pageNo: 'number',
      pageSize: 'number',
      status: 'string',
      webFilterTemplateIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.webFilterTemplateIds)) {
      $dara.Model.validateArray(this.webFilterTemplateIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

