// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HttpApiMockContract extends $dara.Model {
  /**
   * @example
   * false
   */
  enable?: boolean;
  /**
   * @example
   * 200
   */
  responseCode?: number;
  responseContent?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
      responseCode: 'responseCode',
      responseContent: 'responseContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      responseCode: 'number',
      responseContent: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

