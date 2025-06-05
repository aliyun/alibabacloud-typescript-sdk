// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateContainerGroupRequestContainerLifecyclePostStartHandlerHttpGetHttpHeaders extends $dara.Model {
  /**
   * @remarks
   * The request parameter of the HTTP GET request when you use an HTTP request to specify the postStart callback function.
   * 
   * @example
   * testValue
   */
  name?: string;
  /**
   * @remarks
   * The request parameter value of the HTTP GET request when you use an HTTP request to specify the postStart callback function.
   * 
   * @example
   * test
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

