// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResourceLimitDetails extends $dara.Model {
  GCLevel?: string;
  resourceLimit?: { [key: string]: any };
  shouldIgnoreResourceCheck?: boolean;
  static names(): { [key: string]: string } {
    return {
      GCLevel: 'GCLevel',
      resourceLimit: 'ResourceLimit',
      shouldIgnoreResourceCheck: 'ShouldIgnoreResourceCheck',
    };
  }

  static types(): { [key: string]: any } {
    return {
      GCLevel: 'string',
      resourceLimit: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      shouldIgnoreResourceCheck: 'boolean',
    };
  }

  validate() {
    if(this.resourceLimit) {
      $dara.Model.validateMap(this.resourceLimit);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

