// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResponseMessageEventDataDetailResult extends $dara.Model {
  label?: string;
  description?: string;
  confidence?: number;
  level?: string;
  ext?: any;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      description: 'Description',
      confidence: 'Confidence',
      level: 'Level',
      ext: 'Ext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      description: 'string',
      confidence: 'number',
      level: 'string',
      ext: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResponseMessageEventDataDetail extends $dara.Model {
  result?: ResponseMessageEventDataDetailResult[];
  type?: string;
  level?: string;
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      type: 'Type',
      level: 'Level',
      suggestion: 'Suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': ResponseMessageEventDataDetailResult },
      type: 'string',
      level: 'string',
      suggestion: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResponseMessageEventData extends $dara.Model {
  detail?: ResponseMessageEventDataDetail[];
  suggestion?: string;
  dataId?: string;
  seqList?: string[];
  processedOutput?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      suggestion: 'Suggestion',
      dataId: 'DataId',
      seqList: 'SeqList',
      processedOutput: 'ProcessedOutput',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: { 'type': 'array', 'itemType': ResponseMessageEventDataDetail },
      suggestion: 'string',
      dataId: 'string',
      seqList: { 'type': 'array', 'itemType': 'string' },
      processedOutput: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.detail)) {
      $dara.Model.validateArray(this.detail);
    }
    if(Array.isArray(this.seqList)) {
      $dara.Model.validateArray(this.seqList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResponseMessageEvent extends $dara.Model {
  code?: number;
  message?: string;
  data?: ResponseMessageEventData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      data: ResponseMessageEventData,
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

