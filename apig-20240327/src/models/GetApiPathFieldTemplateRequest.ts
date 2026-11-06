// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApiPathFieldTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The URI of the request, used to query the field template corresponding to the URI.
   * 
   * @example
   * /v1/chat/completions
   */
  path?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

