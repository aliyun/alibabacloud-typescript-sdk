// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateNetworkAccessRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * private&pubnet
   */
  networkAccessType?: string;
  static names(): { [key: string]: string } {
    return {
      networkAccessType: 'networkAccessType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkAccessType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

