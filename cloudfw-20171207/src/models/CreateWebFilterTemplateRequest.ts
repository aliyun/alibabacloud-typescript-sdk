// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWebFilterTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the web filtering template. The description can be up to 128 characters in length and can be empty.
   * 
   * @example
   * Web filtering template for URL access control
   */
  description?: string;
  /**
   * @remarks
   * The name of the web filtering template. The name must be 1 to 64 characters in length and can contain Chinese characters, letters, digits, hyphens (-), underscores (_), and periods (.). It cannot contain spaces or be empty.
   * 
   * This parameter is required.
   * 
   * @example
   * WebFilterTemplate01
   */
  name?: string;
  /**
   * @remarks
   * The status of the web filtering template. Valid values:
   * - **Enable**: enabled.
   * - **Disable**: disabled.
   * 
   * This parameter is required.
   * 
   * @example
   * Enable
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

