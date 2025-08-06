// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMTSStatisResponseBodyMTSStatisBySpecListMTSStatisBySpecMTSStatisDOListMTSStatisDO extends $dara.Model {
  duration?: number;
  specification?: string;
  statTime?: string;
  statTimeUTC?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      specification: 'Specification',
      statTime: 'StatTime',
      statTimeUTC: 'StatTimeUTC',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      specification: 'string',
      statTime: 'string',
      statTimeUTC: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMTSStatisResponseBodyMTSStatisBySpecListMTSStatisBySpecMTSStatisDOList extends $dara.Model {
  MTSStatisDO?: GetMTSStatisResponseBodyMTSStatisBySpecListMTSStatisBySpecMTSStatisDOListMTSStatisDO[];
  static names(): { [key: string]: string } {
    return {
      MTSStatisDO: 'MTSStatisDO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      MTSStatisDO: { 'type': 'array', 'itemType': GetMTSStatisResponseBodyMTSStatisBySpecListMTSStatisBySpecMTSStatisDOListMTSStatisDO },
    };
  }

  validate() {
    if(Array.isArray(this.MTSStatisDO)) {
      $dara.Model.validateArray(this.MTSStatisDO);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMTSStatisResponseBodyMTSStatisBySpecListMTSStatisBySpec extends $dara.Model {
  MTSStatisDOList?: GetMTSStatisResponseBodyMTSStatisBySpecListMTSStatisBySpecMTSStatisDOList;
  specification?: string;
  static names(): { [key: string]: string } {
    return {
      MTSStatisDOList: 'MTSStatisDOList',
      specification: 'Specification',
    };
  }

  static types(): { [key: string]: any } {
    return {
      MTSStatisDOList: GetMTSStatisResponseBodyMTSStatisBySpecListMTSStatisBySpecMTSStatisDOList,
      specification: 'string',
    };
  }

  validate() {
    if(this.MTSStatisDOList && typeof (this.MTSStatisDOList as any).validate === 'function') {
      (this.MTSStatisDOList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMTSStatisResponseBodyMTSStatisBySpecList extends $dara.Model {
  MTSStatisBySpec?: GetMTSStatisResponseBodyMTSStatisBySpecListMTSStatisBySpec[];
  static names(): { [key: string]: string } {
    return {
      MTSStatisBySpec: 'MTSStatisBySpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      MTSStatisBySpec: { 'type': 'array', 'itemType': GetMTSStatisResponseBodyMTSStatisBySpecListMTSStatisBySpec },
    };
  }

  validate() {
    if(Array.isArray(this.MTSStatisBySpec)) {
      $dara.Model.validateArray(this.MTSStatisBySpec);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMTSStatisResponseBody extends $dara.Model {
  MTSStatisBySpecList?: GetMTSStatisResponseBodyMTSStatisBySpecList;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      MTSStatisBySpecList: 'MTSStatisBySpecList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      MTSStatisBySpecList: GetMTSStatisResponseBodyMTSStatisBySpecList,
      requestId: 'string',
    };
  }

  validate() {
    if(this.MTSStatisBySpecList && typeof (this.MTSStatisBySpecList as any).validate === 'function') {
      (this.MTSStatisBySpecList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

