// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTaskFlowCooperatorsResponseBodyCooperatorListCooperator } from "./ListTaskFlowCooperatorsResponseBodyCooperatorListCooperator";


export class ListTaskFlowCooperatorsResponseBodyCooperatorList extends $dara.Model {
  cooperator?: ListTaskFlowCooperatorsResponseBodyCooperatorListCooperator[];
  static names(): { [key: string]: string } {
    return {
      cooperator: 'Cooperator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cooperator: { 'type': 'array', 'itemType': ListTaskFlowCooperatorsResponseBodyCooperatorListCooperator },
    };
  }

  validate() {
    if(Array.isArray(this.cooperator)) {
      $dara.Model.validateArray(this.cooperator);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

