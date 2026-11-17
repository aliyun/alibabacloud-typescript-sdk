// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApplicationTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application template to query. The template must exist within the current Alibaba Cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * ati-4f0691c56b8d4f06
   */
  applicationTemplateId?: string;
  /**
   * @remarks
   * The return scope for built-in application actions. Valid values:
   * - **Custom**: returns only applications whose actions have been customized by the user. This is the default value.
   * - **All**: returns all built-in applications.
   * The priority of action effectiveness is: user customization > template default > application library default.
   * 
   * @example
   * Custom
   */
  builtInApplicationActionType?: string;
  static names(): { [key: string]: string } {
    return {
      applicationTemplateId: 'ApplicationTemplateId',
      builtInApplicationActionType: 'BuiltInApplicationActionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationTemplateId: 'string',
      builtInApplicationActionType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

