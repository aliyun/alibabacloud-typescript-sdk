// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HttpApiMockContract extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the Mock feature.
   * 
   * @example
   * false
   */
  enable?: boolean;
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * 200
   */
  responseCode?: number;
  /**
   * @remarks
   * The response content.
   * 
   * @example
   * Mock content.
   */
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

