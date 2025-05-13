// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MigrationJobSourceCluster extends $dara.Model {
  instanceId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instanceId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
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

