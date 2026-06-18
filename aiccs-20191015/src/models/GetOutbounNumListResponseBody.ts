// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOutbounNumListResponseBodyDataNum extends $dara.Model {
  /**
   * @remarks
   * Description of the caller number (geographic location information).
   * 
   * @example
   * 浙江省杭州市
   */
  description?: string;
  /**
   * @remarks
   * Caller number type. Valid values:  
   * 
   * - **1**: Number.  
   * - **2**: Number group.
   * 
   * @example
   * 1
   */
  type?: number;
  /**
   * @remarks
   * Caller number.
   * 
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
   * @remarks
   * Number group description (number group name).
   * 
   * @example
   * Jella
   */
  description?: string;
  /**
   * @remarks
   * Number group type. Valid values:  
   * 
   * - **1**: Number.  
   * - **2**: Number group.
   * 
   * @example
   * 2
   */
  type?: number;
  /**
   * @remarks
   * Number group ID.
   * 
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
  /**
   * @remarks
   * Caller number information.
   */
  num?: GetOutbounNumListResponseBodyDataNum[];
  /**
   * @remarks
   * Number group information.
   */
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
   * @remarks
   * Status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * Information about the number list.
   */
  data?: GetOutbounNumListResponseBodyData;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Description of the status code.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call succeeded.
   * 
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

