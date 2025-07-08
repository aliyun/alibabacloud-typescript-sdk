// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySmsSaasTaskDetailNewResponseBodySaasBaseCommParamParamList extends $dara.Model {
  param?: string[];
  static names(): { [key: string]: string } {
    return {
      param: 'Param',
    };
  }

  static types(): { [key: string]: any } {
    return {
      param: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.param)) {
      $dara.Model.validateArray(this.param);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

