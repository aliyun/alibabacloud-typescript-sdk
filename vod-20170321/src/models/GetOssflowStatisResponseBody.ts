// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOSSFlowStatisResponseBodyOSSFlowStatisList extends $dara.Model {
  networkOut?: number;
  statTime?: string;
  statTimeUTC?: string;
  static names(): { [key: string]: string } {
    return {
      networkOut: 'NetworkOut',
      statTime: 'StatTime',
      statTimeUTC: 'StatTimeUTC',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkOut: 'number',
      statTime: 'string',
      statTimeUTC: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOSSFlowStatisResponseBody extends $dara.Model {
  OSSFlowStatisList?: GetOSSFlowStatisResponseBodyOSSFlowStatisList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      OSSFlowStatisList: 'OSSFlowStatisList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      OSSFlowStatisList: { 'type': 'array', 'itemType': GetOSSFlowStatisResponseBodyOSSFlowStatisList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.OSSFlowStatisList)) {
      $dara.Model.validateArray(this.OSSFlowStatisList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

