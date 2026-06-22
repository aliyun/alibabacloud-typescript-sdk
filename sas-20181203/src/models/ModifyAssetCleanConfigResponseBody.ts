// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAssetCleanConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The processing result. Valid values:
   * - **true**: Succeeded.
   * - **false**: Failed.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 952776BD-5546-59FC-8AF3-B54EBAD57***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
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

