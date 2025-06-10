// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class SegmentLymphNodeAdvanceRequestURLList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  URLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      URLObject: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      URLObject: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

