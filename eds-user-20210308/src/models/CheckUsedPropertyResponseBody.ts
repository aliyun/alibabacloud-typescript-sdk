// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckUsedPropertyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 22C97624-2405-54AC-BD44-A63FBE97****
   */
  requestId?: string;
  /**
   * @remarks
   * The number of convenience accounts associated with the specified custom property.
   * 
   * @example
   * 2
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

