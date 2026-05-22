// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeactivateVersionManagementResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D61E4801-EAFF-4A63-AAE1-FBF6CE1CFD1C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

