// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QuerySmarttagTemplateListResponseBodyTemplates } from "./QuerySmarttagTemplateListResponseBodyTemplates";


export class QuerySmarttagTemplateListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5210DBB0-E327-4D45-ADBC-0B83C8796E26
   */
  requestId?: string;
  /**
   * @remarks
   * The templates.
   */
  templates?: QuerySmarttagTemplateListResponseBodyTemplates;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templates: 'Templates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templates: QuerySmarttagTemplateListResponseBodyTemplates,
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

