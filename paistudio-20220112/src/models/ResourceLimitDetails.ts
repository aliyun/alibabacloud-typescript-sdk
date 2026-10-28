// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResourceLimitDetails extends $dara.Model {
  /**
   * @remarks
   * The GC level.
   */
  GCLevel?: string;
  /**
   * @remarks
   * The resource limit details.
   */
  resourceLimit?: { [key: string]: any };
  /**
   * @remarks
   * Specifies whether to ignore the resource check.
   */
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

