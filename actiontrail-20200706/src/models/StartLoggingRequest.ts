// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartLoggingRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the trail that you want to enable.
   * 
   * The name must be 6 to 36 characters in length, and can contain lowercase letters, digits, hyphens (-), and underscores (_). It must start with a lowercase letter.
   * 
   * > The name must be unique within your Alibaba Cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * trail-test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

