// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteUnknownThreatDetectProcessRequest extends $dara.Model {
  processIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      processIdList: 'ProcessIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      processIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.processIdList)) {
      $dara.Model.validateArray(this.processIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

