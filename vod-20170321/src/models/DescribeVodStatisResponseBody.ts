// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodStatisResponseBodyCdnData extends $dara.Model {
  bps?: number;
  traffic?: number;
  static names(): { [key: string]: string } {
    return {
      bps: 'Bps',
      traffic: 'Traffic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bps: 'number',
      traffic: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodStatisResponseBodyStorageData extends $dara.Model {
  size?: number;
  traffic?: number;
  static names(): { [key: string]: string } {
    return {
      size: 'Size',
      traffic: 'Traffic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      size: 'number',
      traffic: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodStatisResponseBodyTranscodeData extends $dara.Model {
  duration?: number;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodStatisResponseBody extends $dara.Model {
  cdnData?: DescribeVodStatisResponseBodyCdnData;
  requestId?: string;
  storageData?: DescribeVodStatisResponseBodyStorageData;
  transcodeData?: DescribeVodStatisResponseBodyTranscodeData;
  static names(): { [key: string]: string } {
    return {
      cdnData: 'CdnData',
      requestId: 'RequestId',
      storageData: 'StorageData',
      transcodeData: 'TranscodeData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdnData: DescribeVodStatisResponseBodyCdnData,
      requestId: 'string',
      storageData: DescribeVodStatisResponseBodyStorageData,
      transcodeData: DescribeVodStatisResponseBodyTranscodeData,
    };
  }

  validate() {
    if(this.cdnData && typeof (this.cdnData as any).validate === 'function') {
      (this.cdnData as any).validate();
    }
    if(this.storageData && typeof (this.storageData as any).validate === 'function') {
      (this.storageData as any).validate();
    }
    if(this.transcodeData && typeof (this.transcodeData as any).validate === 'function') {
      (this.transcodeData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

