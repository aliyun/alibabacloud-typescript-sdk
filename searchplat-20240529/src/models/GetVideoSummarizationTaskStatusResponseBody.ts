// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVideoSummarizationTaskStatusResponseBodyResultDataChunksMetadata extends $dara.Model {
  summary?: string;
  tags?: string[];
  title?: string;
  static names(): { [key: string]: string } {
    return {
      summary: 'summary',
      tags: 'tags',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      summary: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoSummarizationTaskStatusResponseBodyResultDataChunks extends $dara.Model {
  enhancedTranscript?: string;
  index?: number;
  metadata?: GetVideoSummarizationTaskStatusResponseBodyResultDataChunksMetadata;
  static names(): { [key: string]: string } {
    return {
      enhancedTranscript: 'enhanced_transcript',
      index: 'index',
      metadata: 'metadata',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enhancedTranscript: 'string',
      index: 'number',
      metadata: GetVideoSummarizationTaskStatusResponseBodyResultDataChunksMetadata,
    };
  }

  validate() {
    if(this.metadata && typeof (this.metadata as any).validate === 'function') {
      (this.metadata as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoSummarizationTaskStatusResponseBodyResultDataVideoMetadata extends $dara.Model {
  summary?: string;
  tags?: string[];
  title?: string;
  static names(): { [key: string]: string } {
    return {
      summary: 'summary',
      tags: 'tags',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      summary: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoSummarizationTaskStatusResponseBodyResultData extends $dara.Model {
  chunks?: GetVideoSummarizationTaskStatusResponseBodyResultDataChunks[];
  videoMetadata?: GetVideoSummarizationTaskStatusResponseBodyResultDataVideoMetadata;
  static names(): { [key: string]: string } {
    return {
      chunks: 'chunks',
      videoMetadata: 'video_metadata',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunks: { 'type': 'array', 'itemType': GetVideoSummarizationTaskStatusResponseBodyResultDataChunks },
      videoMetadata: GetVideoSummarizationTaskStatusResponseBodyResultDataVideoMetadata,
    };
  }

  validate() {
    if(Array.isArray(this.chunks)) {
      $dara.Model.validateArray(this.chunks);
    }
    if(this.videoMetadata && typeof (this.videoMetadata as any).validate === 'function') {
      (this.videoMetadata as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoSummarizationTaskStatusResponseBodyResult extends $dara.Model {
  data?: GetVideoSummarizationTaskStatusResponseBodyResultData;
  error?: string;
  status?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      error: 'error',
      status: 'status',
      taskId: 'task_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetVideoSummarizationTaskStatusResponseBodyResultData,
      error: 'string',
      status: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoSummarizationTaskStatusResponseBodyUsage extends $dara.Model {
  audioToken?: number;
  imageToken?: number;
  inputToken?: number;
  outputToken?: number;
  static names(): { [key: string]: string } {
    return {
      audioToken: 'audio_token',
      imageToken: 'image_token',
      inputToken: 'input_token',
      outputToken: 'output_token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioToken: 'number',
      imageToken: 'number',
      inputToken: 'number',
      outputToken: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoSummarizationTaskStatusResponseBody extends $dara.Model {
  latency?: number;
  requestId?: string;
  result?: GetVideoSummarizationTaskStatusResponseBodyResult;
  usage?: GetVideoSummarizationTaskStatusResponseBodyUsage;
  static names(): { [key: string]: string } {
    return {
      latency: 'latency',
      requestId: 'request_id',
      result: 'result',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      latency: 'number',
      requestId: 'string',
      result: GetVideoSummarizationTaskStatusResponseBodyResult,
      usage: GetVideoSummarizationTaskStatusResponseBodyUsage,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    if(this.usage && typeof (this.usage as any).validate === 'function') {
      (this.usage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

