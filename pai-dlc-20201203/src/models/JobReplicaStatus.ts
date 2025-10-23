// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class JobReplicaStatus extends $dara.Model {
  active?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'number',
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

