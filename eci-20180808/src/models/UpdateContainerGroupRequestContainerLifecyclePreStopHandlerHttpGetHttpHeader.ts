// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateContainerGroupRequestContainerLifecyclePreStopHandlerHttpGetHttpHeader extends $dara.Model {
  /**
   * @remarks
   * The request parameter of the HTTP GET request when you use an HTTP request to specify the preStop callback function.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The request parameter value of the HTTP GET request when you use an HTTP request to specify the preStop callback function.
   * 
   * @example
   * testValue
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

