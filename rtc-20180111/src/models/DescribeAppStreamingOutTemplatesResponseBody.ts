// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAppStreamingOutTemplatesResponseBodyTemplates } from "./DescribeAppStreamingOutTemplatesResponseBodyTemplates";


export class DescribeAppStreamingOutTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * B0A2FCBC-43A4-428F-BC1D-3F4F85837F76
   */
  requestId?: string;
  templates?: DescribeAppStreamingOutTemplatesResponseBodyTemplates[];
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
      templates: { 'type': 'array', 'itemType': DescribeAppStreamingOutTemplatesResponseBodyTemplates },
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

