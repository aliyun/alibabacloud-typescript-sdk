// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartRenderingSessionResponseBodyPortMappings extends $dara.Model {
  /**
   * @example
   * 10013/10020
   */
  externalPort?: string;
  /**
   * @example
   * 49008/49015
   */
  internalPort?: string;
  static names(): { [key: string]: string } {
    return {
      externalPort: 'ExternalPort',
      internalPort: 'InternalPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalPort: 'string',
      internalPort: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

