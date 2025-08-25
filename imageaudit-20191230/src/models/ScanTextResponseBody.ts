// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScanTextResponseBodyDataElementsResultsDetailsContexts extends $dara.Model {
  context?: string;
  static names(): { [key: string]: string } {
    return {
      context: 'Context',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanTextResponseBodyDataElementsResultsDetails extends $dara.Model {
  contexts?: ScanTextResponseBodyDataElementsResultsDetailsContexts[];
  /**
   * @example
   * ad
   */
  label?: string;
  static names(): { [key: string]: string } {
    return {
      contexts: 'Contexts',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contexts: { 'type': 'array', 'itemType': ScanTextResponseBodyDataElementsResultsDetailsContexts },
      label: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.contexts)) {
      $dara.Model.validateArray(this.contexts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanTextResponseBodyDataElementsResults extends $dara.Model {
  details?: ScanTextResponseBodyDataElementsResultsDetails[];
  /**
   * @example
   * ad
   */
  label?: string;
  /**
   * @example
   * 99.91
   */
  rate?: number;
  /**
   * @example
   * block
   */
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      details: 'Details',
      label: 'Label',
      rate: 'Rate',
      suggestion: 'Suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      details: { 'type': 'array', 'itemType': ScanTextResponseBodyDataElementsResultsDetails },
      label: 'string',
      rate: 'number',
      suggestion: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.details)) {
      $dara.Model.validateArray(this.details);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanTextResponseBodyDataElements extends $dara.Model {
  results?: ScanTextResponseBodyDataElementsResults[];
  /**
   * @example
   * txt6Vh5Fv0DAFy5hgdVRt3pqf-1s82jj
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      results: 'Results',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      results: { 'type': 'array', 'itemType': ScanTextResponseBodyDataElementsResults },
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanTextResponseBodyData extends $dara.Model {
  elements?: ScanTextResponseBodyDataElements[];
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': ScanTextResponseBodyDataElements },
    };
  }

  validate() {
    if(Array.isArray(this.elements)) {
      $dara.Model.validateArray(this.elements);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanTextResponseBody extends $dara.Model {
  data?: ScanTextResponseBodyData;
  /**
   * @example
   * C7CD87E3-57A5-4E2F-8A44-809F3554692C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ScanTextResponseBodyData,
      requestId: 'string',
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

