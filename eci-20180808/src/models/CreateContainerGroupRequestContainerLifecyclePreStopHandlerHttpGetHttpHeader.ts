// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateContainerGroupRequestContainerLifecyclePreStopHandlerHttpGetHttpHeader extends $dara.Model {
  /**
   * @remarks
   * The name of the custom field in the HTTP GET request header when you use HTTP requests to specify a presto hook.
   * 
   * @example
   * Xiao-Custom-Header
   */
  name?: string;
  /**
   * @remarks
   * The value of the custom field in the HTTP GET request header when you use HTTP requests to specify a preStop hook.
   * 
   * @example
   * test-preStop
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

