// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWebFilterTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the web filtering template. The description can be up to 128 characters in length. If this parameter is not specified, the original value is retained. If an empty string is specified, the description is cleared.
   * 
   * @example
   * Web filtering template for URL access control
   */
  description?: string;
  /**
   * @remarks
   * The name of the web filtering template. The name must be 1 to 64 characters in length and can contain Chinese characters, English letters, digits, hyphens (-), underscores (_), and periods (.). It cannot contain spaces. If this parameter is not specified or is left empty, the original value is retained.
   * 
   * @example
   * Web filtering template 02
   */
  name?: string;
  /**
   * @remarks
   * The status of the web filtering template. Valid values:
   * - **Enable**: Enabled.
   * - **Disable**: Disabled.
   * If this parameter is not specified or is left empty, the original value is retained.
   * 
   * @example
   * Disable
   */
  status?: string;
  /**
   * @remarks
   * The ID of the web filtering template to be modified. The template must exist within the current Alibaba Cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * wft-3f2a9c1d4b5e6f70
   */
  webFilterTemplateId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      status: 'Status',
      webFilterTemplateId: 'WebFilterTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      status: 'string',
      webFilterTemplateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

