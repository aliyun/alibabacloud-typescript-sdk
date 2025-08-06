// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteFilterConfigsRequest extends $dara.Model {
  uuId?: string;
  static names(): { [key: string]: string } {
    return {
      uuId: 'UuId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uuId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

