// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteK8sAccessInfoRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * None
   */
  aliyunYundunGatewayApiName?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * None
   */
  aliyunYundunGatewayPopName?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * None
   */
  aliyunYundunGatewayProjectName?: string;
  /**
   * @remarks
   * The ID generated when Kubernetes is connected. You can call the GenerateK8sAccessInfo operation to query the ID.
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

