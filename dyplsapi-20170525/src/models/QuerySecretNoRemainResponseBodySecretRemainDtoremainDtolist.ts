// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QuerySecretNoRemainResponseBodySecretRemainDTORemainDTOListRemainDTO } from "./QuerySecretNoRemainResponseBodySecretRemainDtoremainDtolistRemainDto";


export class QuerySecretNoRemainResponseBodySecretRemainDTORemainDTOList extends $dara.Model {
  remainDTO?: QuerySecretNoRemainResponseBodySecretRemainDTORemainDTOListRemainDTO[];
  static names(): { [key: string]: string } {
    return {
      remainDTO: 'remainDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remainDTO: { 'type': 'array', 'itemType': QuerySecretNoRemainResponseBodySecretRemainDTORemainDTOListRemainDTO },
    };
  }

  validate() {
    if(Array.isArray(this.remainDTO)) {
      $dara.Model.validateArray(this.remainDTO);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

