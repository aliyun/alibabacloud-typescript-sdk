// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTaskFlowTimeVariablesResponseBodyTimeVariablesTimeVariable } from "./ListTaskFlowTimeVariablesResponseBodyTimeVariablesTimeVariable";


export class ListTaskFlowTimeVariablesResponseBodyTimeVariables extends $dara.Model {
  timeVariable?: ListTaskFlowTimeVariablesResponseBodyTimeVariablesTimeVariable[];
  static names(): { [key: string]: string } {
    return {
      timeVariable: 'TimeVariable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeVariable: { 'type': 'array', 'itemType': ListTaskFlowTimeVariablesResponseBodyTimeVariablesTimeVariable },
    };
  }

  validate() {
    if(Array.isArray(this.timeVariable)) {
      $dara.Model.validateArray(this.timeVariable);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

