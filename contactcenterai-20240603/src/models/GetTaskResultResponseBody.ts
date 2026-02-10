// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTaskResultResponseBodyDataAsrResult extends $dara.Model {
  begin?: number;
  emotionValue?: number;
  end?: number;
  role?: string;
  roleName?: string;
  speechRate?: number;
  words?: string;
  static names(): { [key: string]: string } {
    return {
      begin: 'begin',
      emotionValue: 'emotionValue',
      end: 'end',
      role: 'role',
      roleName: 'roleName',
      speechRate: 'speechRate',
      words: 'words',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      emotionValue: 'number',
      end: 'number',
      role: 'string',
      roleName: 'string',
      speechRate: 'number',
      words: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResultResponseBodyDataUsageRagAdaptive extends $dara.Model {
  inputTokens?: number;
  invokeCount?: number;
  outputTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'inputTokens',
      invokeCount: 'invokeCount',
      outputTokens: 'outputTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputTokens: 'number',
      invokeCount: 'number',
      outputTokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResultResponseBodyDataUsageRagDialogSummary extends $dara.Model {
  inputTokens?: number;
  invokeCount?: number;
  outputTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'inputTokens',
      invokeCount: 'invokeCount',
      outputTokens: 'outputTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputTokens: 'number',
      invokeCount: 'number',
      outputTokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResultResponseBodyDataUsageRag extends $dara.Model {
  adaptive?: GetTaskResultResponseBodyDataUsageRagAdaptive;
  dialogSummary?: GetTaskResultResponseBodyDataUsageRagDialogSummary;
  static names(): { [key: string]: string } {
    return {
      adaptive: 'adaptive',
      dialogSummary: 'dialogSummary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adaptive: GetTaskResultResponseBodyDataUsageRagAdaptive,
      dialogSummary: GetTaskResultResponseBodyDataUsageRagDialogSummary,
    };
  }

  validate() {
    if(this.adaptive && typeof (this.adaptive as any).validate === 'function') {
      (this.adaptive as any).validate();
    }
    if(this.dialogSummary && typeof (this.dialogSummary as any).validate === 'function') {
      (this.dialogSummary as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResultResponseBodyDataUsage extends $dara.Model {
  rag?: GetTaskResultResponseBodyDataUsageRag;
  static names(): { [key: string]: string } {
    return {
      rag: 'rag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rag: GetTaskResultResponseBodyDataUsageRag,
    };
  }

  validate() {
    if(this.rag && typeof (this.rag as any).validate === 'function') {
      (this.rag as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResultResponseBodyData extends $dara.Model {
  asrResult?: GetTaskResultResponseBodyDataAsrResult[];
  extra?: string;
  ragErrorMessage?: string;
  ragResult?: string;
  ragStatus?: string;
  taskErrorMessage?: string;
  /**
   * @example
   * 20240905-********-93E9-5D45-B4EF-045743A34071
   */
  taskId?: string;
  /**
   * @example
   * FINISH
   */
  taskStatus?: string;
  text?: string;
  usage?: GetTaskResultResponseBodyDataUsage;
  static names(): { [key: string]: string } {
    return {
      asrResult: 'asrResult',
      extra: 'extra',
      ragErrorMessage: 'ragErrorMessage',
      ragResult: 'ragResult',
      ragStatus: 'ragStatus',
      taskErrorMessage: 'taskErrorMessage',
      taskId: 'taskId',
      taskStatus: 'taskStatus',
      text: 'text',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asrResult: { 'type': 'array', 'itemType': GetTaskResultResponseBodyDataAsrResult },
      extra: 'string',
      ragErrorMessage: 'string',
      ragResult: 'string',
      ragStatus: 'string',
      taskErrorMessage: 'string',
      taskId: 'string',
      taskStatus: 'string',
      text: 'string',
      usage: GetTaskResultResponseBodyDataUsage,
    };
  }

  validate() {
    if(Array.isArray(this.asrResult)) {
      $dara.Model.validateArray(this.asrResult);
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

export class GetTaskResultResponseBody extends $dara.Model {
  data?: GetTaskResultResponseBodyData;
  /**
   * @example
   * 968A8634-FA2C-5381-9B3E-C552DED7E8BF
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetTaskResultResponseBodyData,
      requestId: 'string',
      success: 'string',
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

