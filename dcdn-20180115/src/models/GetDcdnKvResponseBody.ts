// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDcdnKvResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D61E4801-EAFF-4A63-AAE1-FBF6CE1CFD1C
   */
  requestId?: string;
  /**
   * @remarks
   * The value of the key.
   * 
   * @example
   * value1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
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

