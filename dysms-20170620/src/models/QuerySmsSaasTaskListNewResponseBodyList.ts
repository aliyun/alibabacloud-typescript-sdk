// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QuerySmsSaasTaskListNewResponseBodyListFcSaasTaskDTO } from "./QuerySmsSaasTaskListNewResponseBodyListFcSaasTaskDto";


export class QuerySmsSaasTaskListNewResponseBodyList extends $dara.Model {
  fcSaasTaskDTO?: QuerySmsSaasTaskListNewResponseBodyListFcSaasTaskDTO[];
  static names(): { [key: string]: string } {
    return {
      fcSaasTaskDTO: 'FcSaasTaskDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fcSaasTaskDTO: { 'type': 'array', 'itemType': QuerySmsSaasTaskListNewResponseBodyListFcSaasTaskDTO },
    };
  }

  validate() {
    if(Array.isArray(this.fcSaasTaskDTO)) {
      $dara.Model.validateArray(this.fcSaasTaskDTO);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

