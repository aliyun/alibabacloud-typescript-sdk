// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAsyncTaskResultResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The task result.
   * 
   * @example
   * {\\"url\\":\\"https://aidge-bailian-oss.oss-cn-beijing.aliyuncs.com/gaolinfeng/pdf_trans/translated_en.pdf?security-token=CAISzwJ1q6Ft5B2yfSjIr5ntKv7urOdn9YTeaVbb1lQRfcxi2Kz%2BgDz2IHhMeHFgAeAbs%2Fw%2Fm29W6v4SlqZdVplOWU3Da%2BB364xK7Q754wRDcULuv9I%2Bk5SANTW5KXyShb3%2FAYjQSNfaZY3eCTTtnTNyxr3XbCirW0ffX7SClZ9gaKZ8PGD6F00kYu1bPQx%2FssQXGGLMPPK2SH7Qj3HXEVBjt3gX6wo9y9zmk53FsUWA1QKmlr9F%2BdWhGPX%2BMZkwZqUYesyuwel7epDG1CNt8BVQ%2FM909vccoWuf7onNXgQJs0rZbbaMoscSJQ51aaV%2FFaUBt%2FXmi%2Fxzt6nJkID626jAvGbZzsW0rumBtyikcIvBXr5RHT3rIrVAU%2BuEf19557bo3dbfkNdWOrtHZDY5Qn9nURKxAbSEg2uBaWTIIJPmvc97r9wbhjuH87JeC0jQHt3xuRqAATp5EbLOeo%2BZktMLbi%2FUsZgcvdIEIv3tPBCYfyJnh%2Bj6U8IyaLKQYHQBtjsfyMngFfS09jFdjBcUebzvYJs21gyU5u%2FZ9SeReh%2FacuIMVoggWy3o9Y%2BnBA2QPCcKqVM7XlwriM%2FJOAyhvj%2Bjtj7BUoyD%2BrSgF5brq5ykjN7t2U7oIAA%3D&OSSAccessKeyId=STS.NZXaDZA8FBF5kpj2TDqCN7iUb&Expires=1780315869&Signature=CdbMkhcED4Ovhw438ZVe5nzU1mk%3D\\"}
   */
  result?: string;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * COMPLETED
   */
  status?: string;
  /**
   * @remarks
   * The downstream task ID.
   * 
   * @example
   * task-xxxxx
   */
  taskId?: string;
  /**
   * @remarks
   * The usage information.
   */
  usageMap?: { [key: string]: number };
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      status: 'Status',
      taskId: 'TaskId',
      usageMap: 'UsageMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'string',
      status: 'string',
      taskId: 'string',
      usageMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
    };
  }

  validate() {
    if(this.usageMap) {
      $dara.Model.validateMap(this.usageMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAsyncTaskResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. This parameter is not returned if the call is successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The asynchronous task result.
   */
  data?: QueryAsyncTaskResultResponseBodyData;
  /**
   * @remarks
   * The error message. This parameter is not returned if the call is successful.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * E1AD60F1-BAC7-546B-9533-E7AD02B16E3F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - true: The call was successful.
   * - false: The call failed.
   * 
   * @example
   * True
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
      code: 'string',
      data: QueryAsyncTaskResultResponseBodyData,
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

