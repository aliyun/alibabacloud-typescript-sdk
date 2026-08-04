// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAccountTrueNameResponseBodyProfileInfo extends $dara.Model {
  trueName?: string;
  static names(): { [key: string]: string } {
    return {
      trueName: 'TrueName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trueName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountTrueNameResponseBody extends $dara.Model {
  profileInfo?: QueryAccountTrueNameResponseBodyProfileInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      profileInfo: 'ProfileInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      profileInfo: QueryAccountTrueNameResponseBodyProfileInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.profileInfo && typeof (this.profileInfo as any).validate === 'function') {
      (this.profileInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

