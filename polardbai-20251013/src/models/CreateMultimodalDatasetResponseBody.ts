// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMultimodalDatasetResponseBody extends $dara.Model {
  /**
   * @example
   * 执行成功返回数据集ID，失败返回错误信息
   * "Data":{"DatasetId":"ds-htev80p61324x8qlbn"}
   */
  data?: any;
  /**
   * @example
   * 错误码
   */
  errCode?: string;
  /**
   * @example
   * 错误信息
   */
  errMessage?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 983863E2-****-1D15-A4AE-3468CD75383D
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'any',
      errCode: 'string',
      errMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

