// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMediaDNALibsResponseBodyAIDNALibInfoListAIDNALibInfo extends $dara.Model {
  fpDBId?: string;
  modelType?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      fpDBId: 'FpDBId',
      modelType: 'ModelType',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fpDBId: 'string',
      modelType: 'string',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMediaDNALibsResponseBodyAIDNALibInfoList extends $dara.Model {
  AIDNALibInfo?: ListMediaDNALibsResponseBodyAIDNALibInfoListAIDNALibInfo[];
  static names(): { [key: string]: string } {
    return {
      AIDNALibInfo: 'AIDNALibInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIDNALibInfo: { 'type': 'array', 'itemType': ListMediaDNALibsResponseBodyAIDNALibInfoListAIDNALibInfo },
    };
  }

  validate() {
    if(Array.isArray(this.AIDNALibInfo)) {
      $dara.Model.validateArray(this.AIDNALibInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMediaDNALibsResponseBody extends $dara.Model {
  AIDNALibInfoList?: ListMediaDNALibsResponseBodyAIDNALibInfoList;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      AIDNALibInfoList: 'AIDNALibInfoList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIDNALibInfoList: ListMediaDNALibsResponseBodyAIDNALibInfoList,
      requestId: 'string',
    };
  }

  validate() {
    if(this.AIDNALibInfoList && typeof (this.AIDNALibInfoList as any).validate === 'function') {
      (this.AIDNALibInfoList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

