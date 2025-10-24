// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the media fingerprint library.
   * 
   * @example
   * 2288c6ca184c0e47098a5b665e2a12****
   */
  fpDBId?: string;
  /**
   * @remarks
   * The unique primary key of the video.
   * 
   * @example
   * 3ca84a39a9024f19853b21be9cf9****
   */
  primaryKey?: string;
  /**
   * @remarks
   * The storage type. Valid values:
   * 
   * *   **nosave**: The fingerprints of the job input are not saved to the media fingerprint library.
   * *   **save**: The fingerprints of the job input are saved to the media fingerprint library only if the job input is not duplicated with media content in the media fingerprint library.
   * *   **forcesave**: The fingerprints of the job input are forcibly saved to the media fingerprint library.
   * 
   * @example
   * save
   */
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
  /**
   * @remarks
   * The duration of the similar audio clip in the audio file that has similar fingerprints to the input audio in the audio fingerprint library.
   * 
   * @example
   * 3
   */
  duration?: string;
  /**
   * @remarks
   * The start point in time of the similar audio clip in the audio file that has similar fingerprints to the input audio in the audio fingerprint library.
   * 
   * @example
   * 0
   */
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
  /**
   * @remarks
   * The duration of the similar audio clip in the input audio.
   * 
   * @example
   * 5
   */
  duration?: string;
  /**
   * @remarks
   * The start point in time of the similar audio clip in the input audio.
   * 
   * @example
   * 0
   */
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
  /**
   * @remarks
   * The start point in time and duration of the similar audio clip in the audio file that has similar fingerprints to the input audio in the audio fingerprint library.
   */
  duplication?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultAudioFpShotsFpShotFpShotSlicesFpShotSliceDuplication;
  /**
   * @remarks
   * The start point in time and duration of the similar audio clip in the input audio.
   */
  input?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultAudioFpShotsFpShotFpShotSlicesFpShotSliceInput;
  /**
   * @remarks
   * The similarity of the input audio against the audio file that has similar fingerprints to the input audio in the audio fingerprint library.
   * 
   * @example
   * 0
   */
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
  /**
   * @remarks
   * The audio files that have similar fingerprints to the input audio in the audio fingerprint library.
   */
  fpShotSlices?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultAudioFpShotsFpShotFpShotSlices;
  /**
   * @remarks
   * The unique primary key of the input audio.
   * 
   * @example
   * 498ac941373341599c4777c8d884****
   */
  primaryKey?: string;
  /**
   * @remarks
   * The overall similarity of the input audio against audio files that have similar fingerprints to the input audio in the audio fingerprint library.
   * 
   * @example
   * 0
   */
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
  /**
   * @remarks
   * The duration of the similar video clip in the video file that has similar fingerprints to the input video in the video fingerprint library.
   * 
   * @example
   * 48
   */
  duration?: string;
  /**
   * @remarks
   * The start point in time of the similar video clip in the video file that has similar fingerprints to the input video in the video fingerprint library.
   * 
   * @example
   * 1260
   */
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
  /**
   * @remarks
   * The duration of the similar video clip in the input video.
   * 
   * @example
   * 48
   */
  duration?: string;
  /**
   * @remarks
   * The start point in time of the similar video clip in the input video.
   * 
   * @example
   * 46
   */
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
  /**
   * @remarks
   * The start point in time and duration of the similar video clip in the video file that has similar fingerprints to the input video in the video fingerprint library.
   */
  duplication?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultFpShotsFpShotFpShotSlicesFpShotSliceDuplication;
  /**
   * @remarks
   * The start time and duration of the similar video clip in the input video.
   */
  input?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultFpShotsFpShotFpShotSlicesFpShotSliceInput;
  /**
   * @remarks
   * The similarity of the input video clip against the video file that has similar fingerprints to the input video in the video fingerprint library.
   * 
   * @example
   * 0
   */
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
  /**
   * @remarks
   * The video files that have similar fingerprints to the input video in the video fingerprint library.
   */
  fpShotSlices?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultFpShotsFpShotFpShotSlices;
  /**
   * @remarks
   * The unique primary key of the input video.
   * 
   * @example
   * 498ac941373341599c4777c8d884****
   */
  primaryKey?: string;
  /**
   * @remarks
   * The overall similarity of the input video against video files that have similar fingerprints to the input video in the video fingerprint library.
   * 
   * >  The overall similarity is the average value of the similarities of the input video clips with the clips of the video that has a similar fingerprint. If multiple video files that have similar fingerprints to the input video exist in the video fingerprint library, the similarities of the input video against multiple similar video clips are returned.
   * 
   * @example
   * 0.8914769887924194
   */
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
  /**
   * @remarks
   * The duration of the similar text snippet in the input text.
   * 
   * @example
   * 3
   */
  duration?: string;
  /**
   * @remarks
   * The start time of the similar text snippet in the input text.
   * 
   * @example
   * 0
   */
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
  /**
   * @remarks
   * The text snippet that has similar fingerprints to the input text in the text fingerprint library.
   * 
   * @example
   * It\\"s snowy today.
   */
  duplicationText?: string;
  /**
   * @remarks
   * The start point in time and duration of the similar text snippet in the input text.
   */
  inputFragment?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultTextFpShotsTextFpShotTextFpShotSlicesTextFpShotSliceInputFragment;
  /**
   * @remarks
   * The input text for text fingerprint analysis.
   * 
   * @example
   * It\\"s snowy today.
   */
  inputText?: string;
  /**
   * @remarks
   * The similarity of the input text against the text snippet that has similar fingerprints to the input text in the text fingerprint library.
   * 
   * @example
   * 1.0
   */
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
  /**
   * @remarks
   * The unique primary key of the input text.
   * 
   * @example
   * 3e34ac649945b53a1b0f863ce030****
   */
  primaryKey?: string;
  /**
   * @remarks
   * The similarity of the input text against text snippets that have similar fingerprints to the input text in the text fingerprint library.
   * 
   * @example
   * 1.0
   */
  similarity?: string;
  /**
   * @remarks
   * The text snippets that have similar fingerprints to the input text in the text fingerprint library.
   */
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
  /**
   * @remarks
   * The audio fingerprint analysis results.
   */
  audioFpShots?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultAudioFpShots;
  /**
   * @remarks
   * The video fingerprint analysis results.
   */
  fpShots?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultFpShots;
  /**
   * @remarks
   * The text fingerprint analysis results.
   */
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
  /**
   * @remarks
   * The OSS bucket in which the job input resides.
   * 
   * @example
   * oss-test
   */
  bucket?: string;
  /**
   * @remarks
   * The OSS region in which the job input resides.
   * 
   * @example
   * oss-cn-beijing
   */
  location?: string;
  /**
   * @remarks
   * The Object Storage Service (OSS) object that is used as the job input.
   * 
   * @example
   * test.mp4
   */
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
  /**
   * @remarks
   * The error code returned if the job fails.
   * 
   * @example
   * InvalidParameter.UUIDFormatInvalid
   */
  code?: string;
  /**
   * @remarks
   * The time when the job was created.
   * 
   * @example
   * 2017-01-10T12:00:00Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The length of the input file.
   * Unit: seconds.
   * 
   * @example
   * 5
   */
  duration?: number;
  /**
   * @remarks
   * The ID of the uploaded file.
   * 
   * @example
   * ebb51ee30f0b49aba959823fa991****
   */
  fileId?: string;
  /**
   * @remarks
   * The time when the job was complete.
   * 
   * @example
   * 0
   */
  finishTime?: string;
  /**
   * @remarks
   * The configurations of the job.
   */
  fpShotConfig?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotConfig;
  /**
   * @remarks
   * The results of the media fingerprint analysis job.
   */
  fpShotResult?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResult;
  /**
   * @remarks
   * The ID of the job.
   * 
   * @example
   * 88c6ca184c0e47098a5b665e2a12****
   */
  id?: string;
  /**
   * @remarks
   * The information about the job input.
   * 
   * @example
   * {"Bucket":"oss-test","Location":"oss-cn-beijing","Object":"test.mp4"}
   */
  input?: string;
  /**
   * @remarks
   * The information about the job input.
   */
  inputFile?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobInputFile;
  /**
   * @remarks
   * The error message returned if the job fails. This parameter is not returned if the job is successful.
   * 
   * @example
   * The parameter \\"Id\\" is invalid.A uuid must:1)be comprised of chracters[a-f],numbers[0-9];2)be 32 characters long
   */
  message?: string;
  /**
   * @remarks
   * The ID of the MPS queue to which the analysis job is submitted.
   * 
   * @example
   * 88c6ca184c0e47098a5b665e2a12****
   */
  pipelineId?: string;
  /**
   * @remarks
   * The status of the job. Valid values:
   * 
   * *   **Queuing**: The job is waiting in the queue.
   * *   **Analysing**: The job is in progress.
   * *   **Success**: The job is successful.
   * *   **Fail**: The job fails.
   * 
   * @example
   * Success
   */
  state?: string;
  /**
   * @remarks
   * The custom data.
   * 
   * @example
   * testid-001
   */
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
  /**
   * @remarks
   * The information about media fingerprint analysis jobs.
   */
  fpShotJobList?: QueryFpShotJobListResponseBodyFpShotJobList;
  /**
   * @remarks
   * The token that is used to retrieve the next page of the query results. The value is a 32-bit UUID. If the returned query results cannot be displayed within one page, this parameter is returned. The value of this parameter is updated for each query.
   * 
   * @example
   * b11c171cced04565b1f38f1ecc39****
   */
  nextPageToken?: string;
  /**
   * @remarks
   * The IDs of the jobs that do not exist.
   */
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

