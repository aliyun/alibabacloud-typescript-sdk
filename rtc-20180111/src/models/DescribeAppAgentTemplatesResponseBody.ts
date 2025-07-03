// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAppAgentTemplatesResponseBodyTemplates } from "./DescribeAppAgentTemplatesResponseBodyTemplates";


export class DescribeAppAgentTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 30D41049-D02D-1C21-86AE-B3E5FD805C27
   */
  requestId?: string;
  templates?: DescribeAppAgentTemplatesResponseBodyTemplates[];
  /**
   * @example
   * 10
   */
  totalNum?: number;
  /**
   * @example
   * 1
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templates: 'Templates',
      totalNum: 'TotalNum',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templates: { 'type': 'array', 'itemType': DescribeAppAgentTemplatesResponseBodyTemplates },
      totalNum: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.templates)) {
      $dara.Model.validateArray(this.templates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

