// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchDeleteHttpApiRoutesRequest extends $dara.Model {
  deleteAll?: boolean;
  routeIds?: string[];
  static names(): { [key: string]: string } {
    return {
      deleteAll: 'deleteAll',
      routeIds: 'routeIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteAll: 'boolean',
      routeIds: { 'type': 'array', 'itemType': 'string' },
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

