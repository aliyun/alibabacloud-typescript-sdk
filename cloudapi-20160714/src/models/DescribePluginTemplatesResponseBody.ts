// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePluginTemplatesResponseBodyTemplates } from "./DescribePluginTemplatesResponseBodyTemplates";


export class DescribePluginTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EF924FE4-2EDD-4CD3-89EC-34E4708574E7
   */
  requestId?: string;
  /**
   * @remarks
   * The templates.
   */
  templates?: DescribePluginTemplatesResponseBodyTemplates;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templates: 'Templates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templates: DescribePluginTemplatesResponseBodyTemplates,
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

