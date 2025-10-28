// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeployK8sApplicationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the change process. You can call the GetChangeOrderInfo operation to query the change process ID. For more information, see [GetChangeOrderInfo](https://help.aliyun.com/document_detail/62072.html).
   * 
   * @example
   * cd65b247-****-475b-ad4b-7039040d625c
   */
  changeOrderId?: string;
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The additional information that is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * a5281053-08e4-47a5-b2ab-5c0323de*****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

