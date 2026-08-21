// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMediaAiAnalysisResponseBodyAiAnalysisResultListAiAnalysisResult extends $dara.Model {
  content?: string;
  extra?: string;
  resultType?: string;
  summary?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      extra: 'Extra',
      resultType: 'ResultType',
      summary: 'Summary',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      extra: 'string',
      resultType: 'string',
      summary: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAiAnalysisResponseBodyAiAnalysisResultList extends $dara.Model {
  aiAnalysisResult?: GetMediaAiAnalysisResponseBodyAiAnalysisResultListAiAnalysisResult[];
  static names(): { [key: string]: string } {
    return {
      aiAnalysisResult: 'AiAnalysisResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiAnalysisResult: { 'type': 'array', 'itemType': GetMediaAiAnalysisResponseBodyAiAnalysisResultListAiAnalysisResult },
    };
  }

  validate() {
    if(Array.isArray(this.aiAnalysisResult)) {
      $dara.Model.validateArray(this.aiAnalysisResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAiAnalysisResponseBody extends $dara.Model {
  aiAnalysisResultList?: GetMediaAiAnalysisResponseBodyAiAnalysisResultList;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 746FFA07-8BBB-46B1-3E94E3B2915E****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aiAnalysisResultList: 'AiAnalysisResultList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiAnalysisResultList: GetMediaAiAnalysisResponseBodyAiAnalysisResultList,
      requestId: 'string',
    };
  }

  validate() {
    if(this.aiAnalysisResultList && typeof (this.aiAnalysisResultList as any).validate === 'function') {
      (this.aiAnalysisResultList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

