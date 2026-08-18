// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSnapshotRequest extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the snapshot.
   * 
   * This parameter is required.
   * 
   * @example
   * 8b723a9e8bd443af920b77e39aeb4f63
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

