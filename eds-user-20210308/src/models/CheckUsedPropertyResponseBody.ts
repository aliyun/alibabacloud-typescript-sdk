// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckUsedPropertyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 22C97624-2405-54AC-BD44-A63FBE97CC2D
   */
  requestId?: string;
  /**
   * @remarks
   * The number of convenience users that are associated with the property.
   * 
   * @example
   * 7
   */
  useCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      useCount: 'UseCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      useCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

