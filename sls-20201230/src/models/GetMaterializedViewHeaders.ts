// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMaterializedViewHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  contentType?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      contentType: 'Content-Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      contentType: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

