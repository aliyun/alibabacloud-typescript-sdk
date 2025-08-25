// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SplitVideoPartsResponseBodyDataElements extends $dara.Model {
  /**
   * @example
   * 10.06
   */
  beginTime?: number;
  /**
   * @example
   * 17.3
   */
  endTime?: number;
  /**
   * @example
   * 1
   */
  index?: number;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      index: 'Index',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      endTime: 'number',
      index: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SplitVideoPartsResponseBodyDataSplitVideoPartResults extends $dara.Model {
  beginTime?: number;
  by?: string;
  endTime?: number;
  theme?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      by: 'By',
      endTime: 'EndTime',
      theme: 'Theme',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      by: 'string',
      endTime: 'number',
      theme: 'string',
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

export class SplitVideoPartsResponseBodyData extends $dara.Model {
  elements?: SplitVideoPartsResponseBodyDataElements[];
  splitVideoPartResults?: SplitVideoPartsResponseBodyDataSplitVideoPartResults[];
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
      splitVideoPartResults: 'SplitVideoPartResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': SplitVideoPartsResponseBodyDataElements },
      splitVideoPartResults: { 'type': 'array', 'itemType': SplitVideoPartsResponseBodyDataSplitVideoPartResults },
    };
  }

  validate() {
    if(Array.isArray(this.elements)) {
      $dara.Model.validateArray(this.elements);
    }
    if(Array.isArray(this.splitVideoPartResults)) {
      $dara.Model.validateArray(this.splitVideoPartResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SplitVideoPartsResponseBody extends $dara.Model {
  data?: SplitVideoPartsResponseBodyData;
  message?: string;
  /**
   * @example
   * A00A3C17-61D5-1489-860D-B709F83A7C40
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: SplitVideoPartsResponseBodyData,
      message: 'string',
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

