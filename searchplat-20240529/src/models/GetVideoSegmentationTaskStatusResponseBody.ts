// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVideoSegmentationTaskStatusResponseBodyResultDataSnapshots extends $dara.Model {
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

export class GetVideoSegmentationTaskStatusResponseBodyResultData extends $dara.Model {
  chunkIndex?: number;
  endTime?: number;
  snapshots?: GetVideoSegmentationTaskStatusResponseBodyResultDataSnapshots[];
  startTime?: number;
  transcript?: string;
  static names(): { [key: string]: string } {
    return {
      chunkIndex: 'chunk_index',
      endTime: 'end_time',
      snapshots: 'snapshots',
      startTime: 'start_time',
      transcript: 'transcript',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkIndex: 'number',
      endTime: 'number',
      snapshots: { 'type': 'array', 'itemType': GetVideoSegmentationTaskStatusResponseBodyResultDataSnapshots },
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

export class GetVideoSegmentationTaskStatusResponseBodyResult extends $dara.Model {
  data?: GetVideoSegmentationTaskStatusResponseBodyResultData[];
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
      data: { 'type': 'array', 'itemType': GetVideoSegmentationTaskStatusResponseBodyResultData },
      error: 'string',
      status: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoSegmentationTaskStatusResponseBodyUsage extends $dara.Model {
  audioToken?: number;
  imageToken?: number;
  static names(): { [key: string]: string } {
    return {
      audioToken: 'audio_token',
      imageToken: 'image_token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioToken: 'number',
      imageToken: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoSegmentationTaskStatusResponseBody extends $dara.Model {
  latency?: number;
  requestId?: string;
  result?: GetVideoSegmentationTaskStatusResponseBodyResult;
  usage?: GetVideoSegmentationTaskStatusResponseBodyUsage;
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
      result: GetVideoSegmentationTaskStatusResponseBodyResult,
      usage: GetVideoSegmentationTaskStatusResponseBodyUsage,
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

