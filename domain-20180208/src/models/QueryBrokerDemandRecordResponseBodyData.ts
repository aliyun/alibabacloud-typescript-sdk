// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryBrokerDemandRecordResponseBodyDataBrokerDemandRecord } from "./QueryBrokerDemandRecordResponseBodyDataBrokerDemandRecord";


export class QueryBrokerDemandRecordResponseBodyData extends $dara.Model {
  brokerDemandRecord?: QueryBrokerDemandRecordResponseBodyDataBrokerDemandRecord[];
  static names(): { [key: string]: string } {
    return {
      brokerDemandRecord: 'BrokerDemandRecord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      brokerDemandRecord: { 'type': 'array', 'itemType': QueryBrokerDemandRecordResponseBodyDataBrokerDemandRecord },
    };
  }

  validate() {
    if(Array.isArray(this.brokerDemandRecord)) {
      $dara.Model.validateArray(this.brokerDemandRecord);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

