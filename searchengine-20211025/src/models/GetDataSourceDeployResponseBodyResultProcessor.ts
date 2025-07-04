// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataSourceDeployResponseBodyResultProcessor extends $dara.Model {
  /**
   * @remarks
   * The startup parameters of the process.
   * 
   * @example
   * {}
   */
  args?: string;
  /**
   * @remarks
   * The resource information.
   * 
   * @example
   * {}
   */
  resource?: string;
  static names(): { [key: string]: string } {
    return {
      args: 'args',
      resource: 'resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: 'string',
      resource: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

