// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVideoDNAResultResponseBodyAIVideoDNAResultFpShotsFpShotSlicesDuplication extends $dara.Model {
  duration?: string;
  start?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'string',
      start: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoDNAResultResponseBodyAIVideoDNAResultFpShotsFpShotSlicesInput extends $dara.Model {
  duration?: string;
  start?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'string',
      start: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoDNAResultResponseBodyAIVideoDNAResultFpShotsFpShotSlices extends $dara.Model {
  duplication?: GetVideoDNAResultResponseBodyAIVideoDNAResultFpShotsFpShotSlicesDuplication;
  input?: GetVideoDNAResultResponseBodyAIVideoDNAResultFpShotsFpShotSlicesInput;
  static names(): { [key: string]: string } {
    return {
      duplication: 'Duplication',
      input: 'Input',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duplication: GetVideoDNAResultResponseBodyAIVideoDNAResultFpShotsFpShotSlicesDuplication,
      input: GetVideoDNAResultResponseBodyAIVideoDNAResultFpShotsFpShotSlicesInput,
    };
  }

  validate() {
    if(this.duplication && typeof (this.duplication as any).validate === 'function') {
      (this.duplication as any).validate();
    }
    if(this.input && typeof (this.input as any).validate === 'function') {
      (this.input as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoDNAResultResponseBodyAIVideoDNAResultFpShots extends $dara.Model {
  fpShotSlices?: GetVideoDNAResultResponseBodyAIVideoDNAResultFpShotsFpShotSlices[];
  primaryKey?: string;
  similarity?: string;
  static names(): { [key: string]: string } {
    return {
      fpShotSlices: 'FpShotSlices',
      primaryKey: 'PrimaryKey',
      similarity: 'Similarity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fpShotSlices: { 'type': 'array', 'itemType': GetVideoDNAResultResponseBodyAIVideoDNAResultFpShotsFpShotSlices },
      primaryKey: 'string',
      similarity: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fpShotSlices)) {
      $dara.Model.validateArray(this.fpShotSlices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoDNAResultResponseBodyAIVideoDNAResult extends $dara.Model {
  fpShots?: GetVideoDNAResultResponseBodyAIVideoDNAResultFpShots[];
  static names(): { [key: string]: string } {
    return {
      fpShots: 'FpShots',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fpShots: { 'type': 'array', 'itemType': GetVideoDNAResultResponseBodyAIVideoDNAResultFpShots },
    };
  }

  validate() {
    if(Array.isArray(this.fpShots)) {
      $dara.Model.validateArray(this.fpShots);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoDNAResultResponseBody extends $dara.Model {
  AIVideoDNAResult?: GetVideoDNAResultResponseBodyAIVideoDNAResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      AIVideoDNAResult: 'AIVideoDNAResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIVideoDNAResult: GetVideoDNAResultResponseBodyAIVideoDNAResult,
      requestId: 'string',
    };
  }

  validate() {
    if(this.AIVideoDNAResult && typeof (this.AIVideoDNAResult as any).validate === 'function') {
      (this.AIVideoDNAResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

