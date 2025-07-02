// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateOssUrlRequest extends $dara.Model {
  objectNameList?: string[];
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      objectNameList: 'ObjectNameList',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectNameList: { 'type': 'array', 'itemType': 'string' },
      sessionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.objectNameList)) {
      $dara.Model.validateArray(this.objectNameList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

