// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCInstanceDdosCountResponseBodyDdosCount extends $dara.Model {
  blackholeCount?: string;
  defenseCount?: string;
  instacenCount?: string;
  static names(): { [key: string]: string } {
    return {
      blackholeCount: 'BlackholeCount',
      defenseCount: 'DefenseCount',
      instacenCount: 'InstacenCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackholeCount: 'string',
      defenseCount: 'string',
      instacenCount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRCInstanceDdosCountResponseBody extends $dara.Model {
  ddosCount?: DescribeRCInstanceDdosCountResponseBodyDdosCount;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ddosCount: 'DdosCount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ddosCount: DescribeRCInstanceDdosCountResponseBodyDdosCount,
      requestId: 'string',
    };
  }

  validate() {
    if(this.ddosCount && typeof (this.ddosCount as any).validate === 'function') {
      (this.ddosCount as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

