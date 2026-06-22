// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteK8sAccessInfoRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is deprecated and can be ignored.
   * 
   * @example
   * None
   */
  aliyunYundunGatewayApiName?: string;
  /**
   * @remarks
   * This parameter is deprecated and can be ignored.
   * 
   * @example
   * None
   */
  aliyunYundunGatewayPopName?: string;
  /**
   * @remarks
   * This parameter is deprecated and can be ignored.
   * 
   * @example
   * None
   */
  aliyunYundunGatewayProjectName?: string;
  /**
   * @remarks
   * The default value generated when accessing Kubernetes. You can obtain the ID by calling the [GenerateK8sAccessInfo](https://help.aliyun.com/document_detail/2623602.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 200
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      aliyunYundunGatewayApiName: 'AliyunYundunGatewayApiName',
      aliyunYundunGatewayPopName: 'AliyunYundunGatewayPopName',
      aliyunYundunGatewayProjectName: 'AliyunYundunGatewayProjectName',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunYundunGatewayApiName: 'string',
      aliyunYundunGatewayPopName: 'string',
      aliyunYundunGatewayProjectName: 'string',
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

