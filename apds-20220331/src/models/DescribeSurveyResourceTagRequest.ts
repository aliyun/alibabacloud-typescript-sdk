// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSurveyResourceTagRequest extends $dara.Model {
  scene?: string;
  sourceUserIdList?: number[];
  static names(): { [key: string]: string } {
    return {
      scene: 'scene',
      sourceUserIdList: 'sourceUserIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scene: 'string',
      sourceUserIdList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.sourceUserIdList)) {
      $dara.Model.validateArray(this.sourceUserIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

