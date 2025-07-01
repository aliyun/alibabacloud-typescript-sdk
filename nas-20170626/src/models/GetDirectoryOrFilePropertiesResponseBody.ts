// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDirectoryOrFilePropertiesResponseBodyEntry } from "./GetDirectoryOrFilePropertiesResponseBodyEntry";


export class GetDirectoryOrFilePropertiesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the file or directory.
   */
  entry?: GetDirectoryOrFilePropertiesResponseBodyEntry;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2D69A58F-345C-4FDE-88E4-BF518948****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      entry: 'Entry',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entry: GetDirectoryOrFilePropertiesResponseBodyEntry,
      requestId: 'string',
    };
  }

  validate() {
    if(this.entry && typeof (this.entry as any).validate === 'function') {
      (this.entry as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

