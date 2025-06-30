// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightReShopConsultResponseBodyModulePassengerJourneyGroupInfoListReShopReasonInfoList extends $dara.Model {
  reasonCode?: string;
  reasonDesc?: string;
  voluntary?: boolean;
  static names(): { [key: string]: string } {
    return {
      reasonCode: 'reason_code',
      reasonDesc: 'reason_desc',
      voluntary: 'voluntary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reasonCode: 'string',
      reasonDesc: 'string',
      voluntary: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

