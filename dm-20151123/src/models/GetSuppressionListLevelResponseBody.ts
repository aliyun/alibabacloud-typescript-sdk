// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSuppressionListLevelResponseBody extends $dara.Model {
  requestId?: string;
  suppressionListLevel?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      suppressionListLevel: 'SuppressionListLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      suppressionListLevel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

