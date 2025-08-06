// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAIStatisResponseBodyAIStatisList extends $dara.Model {
  duration?: number;
  statTime?: string;
  statTimeUTC?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      statTime: 'StatTime',
      statTimeUTC: 'StatTimeUTC',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
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

export class GetAIStatisResponseBody extends $dara.Model {
  AIStatisList?: GetAIStatisResponseBodyAIStatisList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      AIStatisList: 'AIStatisList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIStatisList: { 'type': 'array', 'itemType': GetAIStatisResponseBodyAIStatisList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.AIStatisList)) {
      $dara.Model.validateArray(this.AIStatisList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

