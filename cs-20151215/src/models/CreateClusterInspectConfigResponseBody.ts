// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateClusterInspectConfigResponseBody extends $dara.Model {
  /**
   * @example
   * 873DC52C-28AA-5A5C-938C-684D3D4B****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

