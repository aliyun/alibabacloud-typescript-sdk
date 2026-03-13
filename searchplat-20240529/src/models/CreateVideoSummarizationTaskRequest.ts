// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVideoSummarizationTaskRequestInputChunksSnapshots extends $dara.Model {
  frameIndex?: number;
  frameTime?: number;
  path?: string;
  static names(): { [key: string]: string } {
    return {
      frameIndex: 'frame_index',
      frameTime: 'frame_time',
      path: 'path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frameIndex: 'number',
      frameTime: 'number',
      path: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVideoSummarizationTaskRequestInputChunks extends $dara.Model {
  endTime?: number;
  snapshots?: CreateVideoSummarizationTaskRequestInputChunksSnapshots[];
  startTime?: number;
  transcript?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'end_time',
      snapshots: 'snapshots',
      startTime: 'start_time',
      transcript: 'transcript',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      snapshots: { 'type': 'array', 'itemType': CreateVideoSummarizationTaskRequestInputChunksSnapshots },
      startTime: 'number',
      transcript: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.snapshots)) {
      $dara.Model.validateArray(this.snapshots);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVideoSummarizationTaskRequestInput extends $dara.Model {
  chunks?: CreateVideoSummarizationTaskRequestInputChunks[];
  fileName?: string;
  oss?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      chunks: 'chunks',
      fileName: 'file_name',
      oss: 'oss',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunks: { 'type': 'array', 'itemType': CreateVideoSummarizationTaskRequestInputChunks },
      fileName: 'string',
      oss: 'string',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.chunks)) {
      $dara.Model.validateArray(this.chunks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVideoSummarizationTaskRequestOutput extends $dara.Model {
  oss?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      oss: 'oss',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      oss: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVideoSummarizationTaskRequest extends $dara.Model {
  input?: CreateVideoSummarizationTaskRequestInput;
  output?: CreateVideoSummarizationTaskRequestOutput;
  parameters?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      input: 'input',
      output: 'output',
      parameters: 'parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      input: CreateVideoSummarizationTaskRequestInput,
      output: CreateVideoSummarizationTaskRequestOutput,
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.input && typeof (this.input as any).validate === 'function') {
      (this.input as any).validate();
    }
    if(this.output && typeof (this.output as any).validate === 'function') {
      (this.output as any).validate();
    }
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

