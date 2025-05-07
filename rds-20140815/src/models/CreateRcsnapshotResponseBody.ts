// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRCSnapshotResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CE93CC0D-B65D-5723-AAB1-08CB8BBABAB9
   */
  requestId?: string;
  /**
   * @remarks
   * The snapshot ID.
   * 
   * @example
   * rcds-7mbefjzkqccvdev****
   */
  snapshotId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      snapshotId: 'SnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      snapshotId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

