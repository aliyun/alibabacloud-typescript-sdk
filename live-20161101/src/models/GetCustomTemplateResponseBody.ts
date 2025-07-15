// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCustomTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configurations of the template.
   * 
   * @example
   * {height:1080,scale:[16:9],gop:60,bframes:30,cdesc:h264}
   */
  customTemplate?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BC1E78D3-FA8B-4457-DEE2-6093E1232254
   */
  requestId?: string;
  /**
   * @remarks
   * The name of the template.
   * 
   * @example
   * TestTemplate
   */
  template?: string;
  static names(): { [key: string]: string } {
    return {
      customTemplate: 'CustomTemplate',
      requestId: 'RequestId',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customTemplate: 'string',
      requestId: 'string',
      template: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

