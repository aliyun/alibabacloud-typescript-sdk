// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QuerySendDetailsResponseBodySmsSendDetailDTOsSmsSendDetailDTO } from "./QuerySendDetailsResponseBodySmsSendDetailDtosSmsSendDetailDto";


export class QuerySendDetailsResponseBodySmsSendDetailDTOs extends $dara.Model {
  smsSendDetailDTO?: QuerySendDetailsResponseBodySmsSendDetailDTOsSmsSendDetailDTO[];
  static names(): { [key: string]: string } {
    return {
      smsSendDetailDTO: 'SmsSendDetailDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      smsSendDetailDTO: { 'type': 'array', 'itemType': QuerySendDetailsResponseBodySmsSendDetailDTOsSmsSendDetailDTO },
    };
  }

  validate() {
    if(Array.isArray(this.smsSendDetailDTO)) {
      $dara.Model.validateArray(this.smsSendDetailDTO);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

