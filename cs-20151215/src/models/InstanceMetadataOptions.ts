// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstanceMetadataOptions extends $dara.Model {
  /**
   * @example
   * optional
   */
  httpTokens?: string;
  static names(): { [key: string]: string } {
    return {
      httpTokens: 'http_tokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpTokens: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

