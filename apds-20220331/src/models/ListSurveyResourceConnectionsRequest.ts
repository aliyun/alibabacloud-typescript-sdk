// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSurveyResourceConnectionsRequest extends $dara.Model {
  ids?: number[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'ids',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: { 'type': 'array', 'itemType': 'number' },
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ids)) {
      $dara.Model.validateArray(this.ids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

