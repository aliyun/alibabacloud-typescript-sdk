// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunCompletionResponseBodyUsageRagAdaptive extends $dara.Model {
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

export class RunCompletionResponseBodyUsageRagDialogSummary extends $dara.Model {
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

export class RunCompletionResponseBodyUsageRag extends $dara.Model {
  adaptive?: RunCompletionResponseBodyUsageRagAdaptive;
  dialogSummary?: RunCompletionResponseBodyUsageRagDialogSummary;
  static names(): { [key: string]: string } {
    return {
      adaptive: 'adaptive',
      dialogSummary: 'dialogSummary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adaptive: RunCompletionResponseBodyUsageRagAdaptive,
      dialogSummary: RunCompletionResponseBodyUsageRagDialogSummary,
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

export class RunCompletionResponseBodyUsage extends $dara.Model {
  rag?: RunCompletionResponseBodyUsageRag;
  static names(): { [key: string]: string } {
    return {
      rag: 'rag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rag: RunCompletionResponseBodyUsageRag,
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

export class RunCompletionResponseBody extends $dara.Model {
  finishReason?: string;
  /**
   * @example
   * 17204B98-xxxx-4F9A-8464-2446A84821CA
   */
  requestId?: string;
  text?: string;
  inputTokens?: string;
  outputTokens?: string;
  ragStatus?: string;
  totalTokens?: string;
  usage?: RunCompletionResponseBodyUsage;
  static names(): { [key: string]: string } {
    return {
      finishReason: 'FinishReason',
      requestId: 'RequestId',
      text: 'Text',
      inputTokens: 'inputTokens',
      outputTokens: 'outputTokens',
      ragStatus: 'ragStatus',
      totalTokens: 'totalTokens',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishReason: 'string',
      requestId: 'string',
      text: 'string',
      inputTokens: 'string',
      outputTokens: 'string',
      ragStatus: 'string',
      totalTokens: 'string',
      usage: RunCompletionResponseBodyUsage,
    };
  }

  validate() {
    if(this.usage && typeof (this.usage as any).validate === 'function') {
      (this.usage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

