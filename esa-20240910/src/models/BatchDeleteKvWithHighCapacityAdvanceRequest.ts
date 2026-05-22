// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class BatchDeleteKvWithHighCapacityAdvanceRequest extends $dara.Model {
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
      namespace: 'Namespace',
      urlObject: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

