// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCnameFlatteningResponseBody extends $dara.Model {
  flattenMode?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      flattenMode: 'FlattenMode',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flattenMode: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

