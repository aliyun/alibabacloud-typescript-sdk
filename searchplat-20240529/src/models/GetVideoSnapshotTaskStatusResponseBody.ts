// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVideoSnapshotTaskStatusResponseBodyResultData extends $dara.Model {
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

export class GetVideoSnapshotTaskStatusResponseBodyResult extends $dara.Model {
  data?: GetVideoSnapshotTaskStatusResponseBodyResultData[];
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
      data: { 'type': 'array', 'itemType': GetVideoSnapshotTaskStatusResponseBodyResultData },
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

export class GetVideoSnapshotTaskStatusResponseBodyUsage extends $dara.Model {
  imageCount?: number;
  static names(): { [key: string]: string } {
    return {
      imageCount: 'image_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoSnapshotTaskStatusResponseBody extends $dara.Model {
  latency?: number;
  requestId?: string;
  result?: GetVideoSnapshotTaskStatusResponseBodyResult;
  usage?: GetVideoSnapshotTaskStatusResponseBodyUsage;
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
      result: GetVideoSnapshotTaskStatusResponseBodyResult,
      usage: GetVideoSnapshotTaskStatusResponseBodyUsage,
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

