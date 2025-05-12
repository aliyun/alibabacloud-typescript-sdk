// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2247541A-9F27-47EE-B6EC-484B5475****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the custom transcoding template that is deleted.
   * 
   * @example
   * 16f01ad6175e4230ac42bb5182cd****
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

