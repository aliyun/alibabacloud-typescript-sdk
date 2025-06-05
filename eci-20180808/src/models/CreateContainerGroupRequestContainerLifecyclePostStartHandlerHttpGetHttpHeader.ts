// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateContainerGroupRequestContainerLifecyclePostStartHandlerHttpGetHttpHeader extends $dara.Model {
  /**
   * @remarks
   * The name of the custom field in the HTTP GET request header when you use HTTP requests to specify a postStart hook.
   * 
   * @example
   * Xiao-Custom-Header
   */
  name?: string;
  /**
   * @remarks
   * The value of the custom field in the HTTP GET request header when you use HTTP requests to specify a postStart hook.
   * 
   * @example
   * test-postStart
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

