// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOutbounNumListResponseBodyDataNum extends $dara.Model {
  description?: string;
  /**
   * @example
   * 1
   */
  type?: number;
  /**
   * @example
   * 07512234****
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      type: 'number',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOutbounNumListResponseBodyDataNumGroup extends $dara.Model {
  /**
   * @example
   * Jella
   */
  description?: string;
  /**
   * @example
   * 2
   */
  type?: number;
  /**
   * @example
   * 7688****
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      type: 'number',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOutbounNumListResponseBodyData extends $dara.Model {
  num?: GetOutbounNumListResponseBodyDataNum[];
  numGroup?: GetOutbounNumListResponseBodyDataNumGroup[];
  static names(): { [key: string]: string } {
    return {
      num: 'Num',
      numGroup: 'NumGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      num: { 'type': 'array', 'itemType': GetOutbounNumListResponseBodyDataNum },
      numGroup: { 'type': 'array', 'itemType': GetOutbounNumListResponseBodyDataNumGroup },
    };
  }

  validate() {
    if(Array.isArray(this.num)) {
      $dara.Model.validateArray(this.num);
    }
    if(Array.isArray(this.numGroup)) {
      $dara.Model.validateArray(this.numGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOutbounNumListResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: GetOutbounNumListResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetOutbounNumListResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

