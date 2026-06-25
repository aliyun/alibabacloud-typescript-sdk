// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLablesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the label is designated.
   * 
   * @example
   * true
   */
  isDesignated?: boolean;
  /**
   * @remarks
   * The label.
   * 
   * @example
   * gray
   */
  label?: string;
  /**
   * @remarks
   * Indicates whether the Executor is online.
   * 
   * @example
   * true
   */
  online?: boolean;
  /**
   * @remarks
   * The number of machines with this label.
   * 
   * @example
   * 2
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      isDesignated: 'IsDesignated',
      label: 'Label',
      online: 'Online',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDesignated: 'boolean',
      label: 'string',
      online: 'boolean',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLablesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned list of labels.
   */
  data?: ListLablesResponseBodyData[];
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * Parameter check error
   */
  message?: string;
  /**
   * @remarks
   * A unique identifier for the request. Use this ID to troubleshoot issues.
   * 
   * @example
   * 9079A828-9138-50F1-801E-F2BC3D222A06
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded.
   * 
   * - **true**: The request was successful.
   * 
   * - **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': ListLablesResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

