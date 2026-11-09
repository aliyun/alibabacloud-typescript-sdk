// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteWildcardByTopicResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the deletion was successful. Valid values:
   * - **true**: The deletion was successful.
   * - **false**: The deletion failed.
   * 
   * @example
   * True
   */
  deleted?: string;
  static names(): { [key: string]: string } {
    return {
      deleted: 'Deleted',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleted: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWildcardByTopicResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. Valid values:
   * - 200: success.
   * - Other values: error codes. For more information, see error codes.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The rule information dataset.
   */
  data?: DeleteWildcardByTopicResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82B9E503-F4A1-4F30-976F-C6999FF9****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful. Valid values:
   * - true: The operation was successful.
   * - false: The operation failed.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DeleteWildcardByTopicResponseBodyData,
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

