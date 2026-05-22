// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class PutKvWithHighCapacityAdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  key?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  namespace?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  urlObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      namespace: 'Namespace',
      urlObject: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      namespace: 'string',
      urlObject: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

