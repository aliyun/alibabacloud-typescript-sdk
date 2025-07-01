// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAccessPointResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 70EACC9C-D07A-4A34-ADA4-77506C42****
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

