// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstanceInfo extends $dara.Model {
  imageUrl?: string;
  instanceId?: string;
  status?: string;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      imageUrl: 'imageUrl',
      instanceId: 'instanceId',
      status: 'status',
      versionId: 'versionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrl: 'string',
      instanceId: 'string',
      status: 'string',
      versionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

