// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchPutKvWithHighCapacityRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  namespace?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

