// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchUndeployHttpApiRoutesRequest extends $dara.Model {
  async?: boolean;
  routeIds?: string[];
  undeployAll?: boolean;
  static names(): { [key: string]: string } {
    return {
      async: 'async',
      routeIds: 'routeIds',
      undeployAll: 'undeployAll',
    };
  }

  static types(): { [key: string]: any } {
    return {
      async: 'boolean',
      routeIds: { 'type': 'array', 'itemType': 'string' },
      undeployAll: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.routeIds)) {
      $dara.Model.validateArray(this.routeIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

