// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDefenseResourceTemplatesResponseBodyTemplates } from "./DescribeDefenseResourceTemplatesResponseBodyTemplates";


export class DescribeDefenseResourceTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2305CEB0-BA5A-5543-A1D3-3F1D0891****
   */
  requestId?: string;
  /**
   * @remarks
   * The protection templates.
   */
  templates?: DescribeDefenseResourceTemplatesResponseBodyTemplates[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templates: 'Templates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templates: { 'type': 'array', 'itemType': DescribeDefenseResourceTemplatesResponseBodyTemplates },
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

