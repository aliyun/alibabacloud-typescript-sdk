// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotConfig extends $dara.Model {
  fpDBId?: string;
  primaryKey?: string;
  saveType?: string;
  static names(): { [key: string]: string } {
    return {
      fpDBId: 'FpDBId',
      primaryKey: 'PrimaryKey',
      saveType: 'SaveType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fpDBId: 'string',
      primaryKey: 'string',
      saveType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultAudioFpShotsFpShotFpShotSlicesFpShotSliceDuplication extends $dara.Model {
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

export class QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultAudioFpShotsFpShotFpShotSlicesFpShotSliceInput extends $dara.Model {
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

export class QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultAudioFpShotsFpShotFpShotSlicesFpShotSlice extends $dara.Model {
  duplication?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultAudioFpShotsFpShotFpShotSlicesFpShotSliceDuplication;
  input?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultAudioFpShotsFpShotFpShotSlicesFpShotSliceInput;
  similarity?: string;
  static names(): { [key: string]: string } {
    return {
      duplication: 'Duplication',
      input: 'Input',
      similarity: 'Similarity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duplication: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultAudioFpShotsFpShotFpShotSlicesFpShotSliceDuplication,
      input: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultAudioFpShotsFpShotFpShotSlicesFpShotSliceInput,
      similarity: 'string',
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

export class QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultAudioFpShotsFpShotFpShotSlices extends $dara.Model {
  fpShotSlice?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultAudioFpShotsFpShotFpShotSlicesFpShotSlice[];
  static names(): { [key: string]: string } {
    return {
      fpShotSlice: 'FpShotSlice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fpShotSlice: { 'type': 'array', 'itemType': QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultAudioFpShotsFpShotFpShotSlicesFpShotSlice },
    };
  }

  validate() {
    if(Array.isArray(this.fpShotSlice)) {
      $dara.Model.validateArray(this.fpShotSlice);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultAudioFpShotsFpShot extends $dara.Model {
  fpShotSlices?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultAudioFpShotsFpShotFpShotSlices;
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
      fpShotSlices: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultAudioFpShotsFpShotFpShotSlices,
      primaryKey: 'string',
      similarity: 'string',
    };
  }

  validate() {
    if(this.fpShotSlices && typeof (this.fpShotSlices as any).validate === 'function') {
      (this.fpShotSlices as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultAudioFpShots extends $dara.Model {
  fpShot?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultAudioFpShotsFpShot[];
  static names(): { [key: string]: string } {
    return {
      fpShot: 'FpShot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fpShot: { 'type': 'array', 'itemType': QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultAudioFpShotsFpShot },
    };
  }

  validate() {
    if(Array.isArray(this.fpShot)) {
      $dara.Model.validateArray(this.fpShot);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultFpShotsFpShotFpShotSlicesFpShotSliceDuplication extends $dara.Model {
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

export class QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultFpShotsFpShotFpShotSlicesFpShotSliceInput extends $dara.Model {
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

export class QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultFpShotsFpShotFpShotSlicesFpShotSlice extends $dara.Model {
  duplication?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultFpShotsFpShotFpShotSlicesFpShotSliceDuplication;
  input?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultFpShotsFpShotFpShotSlicesFpShotSliceInput;
  similarity?: string;
  static names(): { [key: string]: string } {
    return {
      duplication: 'Duplication',
      input: 'Input',
      similarity: 'Similarity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duplication: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultFpShotsFpShotFpShotSlicesFpShotSliceDuplication,
      input: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultFpShotsFpShotFpShotSlicesFpShotSliceInput,
      similarity: 'string',
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

export class QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultFpShotsFpShotFpShotSlices extends $dara.Model {
  fpShotSlice?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultFpShotsFpShotFpShotSlicesFpShotSlice[];
  static names(): { [key: string]: string } {
    return {
      fpShotSlice: 'FpShotSlice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fpShotSlice: { 'type': 'array', 'itemType': QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultFpShotsFpShotFpShotSlicesFpShotSlice },
    };
  }

  validate() {
    if(Array.isArray(this.fpShotSlice)) {
      $dara.Model.validateArray(this.fpShotSlice);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultFpShotsFpShot extends $dara.Model {
  fpShotSlices?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultFpShotsFpShotFpShotSlices;
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
      fpShotSlices: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultFpShotsFpShotFpShotSlices,
      primaryKey: 'string',
      similarity: 'string',
    };
  }

  validate() {
    if(this.fpShotSlices && typeof (this.fpShotSlices as any).validate === 'function') {
      (this.fpShotSlices as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultFpShots extends $dara.Model {
  fpShot?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultFpShotsFpShot[];
  static names(): { [key: string]: string } {
    return {
      fpShot: 'FpShot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fpShot: { 'type': 'array', 'itemType': QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultFpShotsFpShot },
    };
  }

  validate() {
    if(Array.isArray(this.fpShot)) {
      $dara.Model.validateArray(this.fpShot);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultTextFpShotsTextFpShotTextFpShotSlicesTextFpShotSliceInputFragment extends $dara.Model {
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

export class QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultTextFpShotsTextFpShotTextFpShotSlicesTextFpShotSlice extends $dara.Model {
  duplicationText?: string;
  inputFragment?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultTextFpShotsTextFpShotTextFpShotSlicesTextFpShotSliceInputFragment;
  inputText?: string;
  similarity?: string;
  static names(): { [key: string]: string } {
    return {
      duplicationText: 'DuplicationText',
      inputFragment: 'InputFragment',
      inputText: 'InputText',
      similarity: 'Similarity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duplicationText: 'string',
      inputFragment: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultTextFpShotsTextFpShotTextFpShotSlicesTextFpShotSliceInputFragment,
      inputText: 'string',
      similarity: 'string',
    };
  }

  validate() {
    if(this.inputFragment && typeof (this.inputFragment as any).validate === 'function') {
      (this.inputFragment as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultTextFpShotsTextFpShotTextFpShotSlices extends $dara.Model {
  textFpShotSlice?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultTextFpShotsTextFpShotTextFpShotSlicesTextFpShotSlice[];
  static names(): { [key: string]: string } {
    return {
      textFpShotSlice: 'TextFpShotSlice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      textFpShotSlice: { 'type': 'array', 'itemType': QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultTextFpShotsTextFpShotTextFpShotSlicesTextFpShotSlice },
    };
  }

  validate() {
    if(Array.isArray(this.textFpShotSlice)) {
      $dara.Model.validateArray(this.textFpShotSlice);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultTextFpShotsTextFpShot extends $dara.Model {
  primaryKey?: string;
  similarity?: string;
  textFpShotSlices?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultTextFpShotsTextFpShotTextFpShotSlices;
  static names(): { [key: string]: string } {
    return {
      primaryKey: 'PrimaryKey',
      similarity: 'Similarity',
      textFpShotSlices: 'TextFpShotSlices',
    };
  }

  static types(): { [key: string]: any } {
    return {
      primaryKey: 'string',
      similarity: 'string',
      textFpShotSlices: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultTextFpShotsTextFpShotTextFpShotSlices,
    };
  }

  validate() {
    if(this.textFpShotSlices && typeof (this.textFpShotSlices as any).validate === 'function') {
      (this.textFpShotSlices as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultTextFpShots extends $dara.Model {
  textFpShot?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultTextFpShotsTextFpShot[];
  static names(): { [key: string]: string } {
    return {
      textFpShot: 'TextFpShot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      textFpShot: { 'type': 'array', 'itemType': QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultTextFpShotsTextFpShot },
    };
  }

  validate() {
    if(Array.isArray(this.textFpShot)) {
      $dara.Model.validateArray(this.textFpShot);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResult extends $dara.Model {
  audioFpShots?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultAudioFpShots;
  fpShots?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultFpShots;
  textFpShots?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultTextFpShots;
  static names(): { [key: string]: string } {
    return {
      audioFpShots: 'AudioFpShots',
      fpShots: 'FpShots',
      textFpShots: 'TextFpShots',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioFpShots: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultAudioFpShots,
      fpShots: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultFpShots,
      textFpShots: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultTextFpShots,
    };
  }

  validate() {
    if(this.audioFpShots && typeof (this.audioFpShots as any).validate === 'function') {
      (this.audioFpShots as any).validate();
    }
    if(this.fpShots && typeof (this.fpShots as any).validate === 'function') {
      (this.fpShots as any).validate();
    }
    if(this.textFpShots && typeof (this.textFpShots as any).validate === 'function') {
      (this.textFpShots as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFpShotJobListResponseBodyFpShotJobListFpShotJobInputFile extends $dara.Model {
  bucket?: string;
  location?: string;
  object?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      location: 'Location',
      object: 'Object',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      location: 'string',
      object: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFpShotJobListResponseBodyFpShotJobListFpShotJob extends $dara.Model {
  code?: string;
  creationTime?: string;
  duration?: number;
  fileId?: string;
  finishTime?: string;
  fpShotConfig?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotConfig;
  fpShotResult?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResult;
  id?: string;
  input?: string;
  inputFile?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobInputFile;
  message?: string;
  pipelineId?: string;
  state?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      creationTime: 'CreationTime',
      duration: 'Duration',
      fileId: 'FileId',
      finishTime: 'FinishTime',
      fpShotConfig: 'FpShotConfig',
      fpShotResult: 'FpShotResult',
      id: 'Id',
      input: 'Input',
      inputFile: 'InputFile',
      message: 'Message',
      pipelineId: 'PipelineId',
      state: 'State',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      creationTime: 'string',
      duration: 'number',
      fileId: 'string',
      finishTime: 'string',
      fpShotConfig: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotConfig,
      fpShotResult: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResult,
      id: 'string',
      input: 'string',
      inputFile: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobInputFile,
      message: 'string',
      pipelineId: 'string',
      state: 'string',
      userData: 'string',
    };
  }

  validate() {
    if(this.fpShotConfig && typeof (this.fpShotConfig as any).validate === 'function') {
      (this.fpShotConfig as any).validate();
    }
    if(this.fpShotResult && typeof (this.fpShotResult as any).validate === 'function') {
      (this.fpShotResult as any).validate();
    }
    if(this.inputFile && typeof (this.inputFile as any).validate === 'function') {
      (this.inputFile as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFpShotJobListResponseBodyFpShotJobList extends $dara.Model {
  fpShotJob?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJob[];
  static names(): { [key: string]: string } {
    return {
      fpShotJob: 'FpShotJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fpShotJob: { 'type': 'array', 'itemType': QueryFpShotJobListResponseBodyFpShotJobListFpShotJob },
    };
  }

  validate() {
    if(Array.isArray(this.fpShotJob)) {
      $dara.Model.validateArray(this.fpShotJob);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFpShotJobListResponseBodyNonExistIds extends $dara.Model {
  string?: string[];
  static names(): { [key: string]: string } {
    return {
      string: 'String',
    };
  }

  static types(): { [key: string]: any } {
    return {
      string: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.string)) {
      $dara.Model.validateArray(this.string);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFpShotJobListResponseBody extends $dara.Model {
  fpShotJobList?: QueryFpShotJobListResponseBodyFpShotJobList;
  /**
   * @remarks
   * The token that is used to retrieve the next page of the query results. The value is a 32-bit UUID. If the returned query results cannot be displayed within one page, this parameter is returned. The value of this parameter is updated for each query.
   * 
   * @example
   * b11c171cced04565b1f38f1ecc39****
   */
  nextPageToken?: string;
  nonExistIds?: QueryFpShotJobListResponseBodyNonExistIds;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 25818875-5F78-4A13-BEF6-D7393642CA58
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fpShotJobList: 'FpShotJobList',
      nextPageToken: 'NextPageToken',
      nonExistIds: 'NonExistIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fpShotJobList: QueryFpShotJobListResponseBodyFpShotJobList,
      nextPageToken: 'string',
      nonExistIds: QueryFpShotJobListResponseBodyNonExistIds,
      requestId: 'string',
    };
  }

  validate() {
    if(this.fpShotJobList && typeof (this.fpShotJobList as any).validate === 'function') {
      (this.fpShotJobList as any).validate();
    }
    if(this.nonExistIds && typeof (this.nonExistIds as any).validate === 'function') {
      (this.nonExistIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

