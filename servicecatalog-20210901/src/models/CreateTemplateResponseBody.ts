// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0FEEF92D-4052-5202-87D0-3D8EC16F81BF
   */
  requestId?: string;
  /**
   * @remarks
   * The URL of the template.
   */
  templateUrl?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateUrl: 'TemplateUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

