// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class GetDocumentConvertResultResponseBodyData extends $dara.Model {
  /**
   * @example
   * e6d83e55df218650b9a296bfbc300076
   */
  md5?: string;
  /**
   * @example
   * 2355965
   */
  size?: number;
  /**
   * @example
   * pdf
   */
  type?: string;
  /**
   * @example
   * http://example.png
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      md5: 'Md5',
      size: 'Size',
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      md5: 'string',
      size: 'number',
      type: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentConvertResultResponseBody extends $dara.Model {
  /**
   * @example
   * noPermission
   */
  code?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  completed?: boolean;
  data?: GetDocumentConvertResultResponseBodyData[];
  /**
   * @example
   * You are not authorized to perform this operation.
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      completed: 'Completed',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      completed: 'boolean',
      data: { 'type': 'array', 'itemType': GetDocumentConvertResultResponseBodyData },
      message: 'string',
      requestId: 'string',
      status: 'string',
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

