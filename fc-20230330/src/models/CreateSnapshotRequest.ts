// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateSnapshotInput } from "./CreateSnapshotInput";


export class CreateSnapshotRequest extends $dara.Model {
  /**
   * @remarks
   * The request body for creating a snapshot.
   */
  body?: CreateSnapshotInput;
  /**
   * @remarks
   * The function alias.
   * 
   * @example
   * alias
   */
  qualifier?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      qualifier: 'qualifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: CreateSnapshotInput,
      qualifier: 'string',
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

