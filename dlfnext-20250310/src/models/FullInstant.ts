// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FullInstant extends $dara.Model {
  snapshotId?: number;
  tagName?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      snapshotId: 'snapshotId',
      tagName: 'tagName',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snapshotId: 'number',
      tagName: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

