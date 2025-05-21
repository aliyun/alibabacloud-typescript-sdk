// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResourceInfo extends $dara.Model {
  resourceId?: string;
  resourceName?: string;
  resourceType?: string;
  resourceVersion?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'resourceId',
      resourceName: 'resourceName',
      resourceType: 'resourceType',
      resourceVersion: 'resourceVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceName: 'string',
      resourceType: 'string',
      resourceVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

