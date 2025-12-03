// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceAuthsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * RAM
   */
  serviceAuthType?: string;
  static names(): { [key: string]: string } {
    return {
      serviceAuthType: 'serviceAuthType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceAuthType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

