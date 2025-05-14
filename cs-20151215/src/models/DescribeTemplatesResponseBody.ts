// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTemplatesResponseBodyPageInfo } from "./DescribeTemplatesResponseBodyPageInfo";
import { DescribeTemplatesResponseBodyTemplates } from "./DescribeTemplatesResponseBodyTemplates";


export class DescribeTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeTemplatesResponseBodyPageInfo;
  /**
   * @remarks
   * The list of returned templates.
   */
  templates?: DescribeTemplatesResponseBodyTemplates[];
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'page_info',
      templates: 'templates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: DescribeTemplatesResponseBodyPageInfo,
      templates: { 'type': 'array', 'itemType': DescribeTemplatesResponseBodyTemplates },
    };
  }

  validate() {
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    if(Array.isArray(this.templates)) {
      $dara.Model.validateArray(this.templates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

