// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMediaDNALibResponseBodyAIDNALibInfo extends $dara.Model {
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

export class CreateMediaDNALibResponseBody extends $dara.Model {
  AIDNALibInfo?: CreateMediaDNALibResponseBodyAIDNALibInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      AIDNALibInfo: 'AIDNALibInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIDNALibInfo: CreateMediaDNALibResponseBodyAIDNALibInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.AIDNALibInfo && typeof (this.AIDNALibInfo as any).validate === 'function') {
      (this.AIDNALibInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

