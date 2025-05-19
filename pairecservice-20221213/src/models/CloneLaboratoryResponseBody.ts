// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloneLaboratoryResponseBody extends $dara.Model {
  /**
   * @example
   * 3
   */
  laboratoryId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 01D22D08-BA20-5F35-8302-99115F288220
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      laboratoryId: 'LaboratoryId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      laboratoryId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

