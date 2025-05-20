// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteStopGatewayRequest extends $dara.Model {
  /**
   * @remarks
   * The ID that can uniquely identify the DBGateway. You can obtain the DBGateway ID by calling the [DescribeCloudbenchTask](https://help.aliyun.com/document_detail/230669.html) operation. The DBGateway ID is the value of the **ClientGatewayId** field in the response.
   * 
   * This parameter is required.
   * 
   * @example
   * 22938c83fcfbced4b4869b9695e3****
   */
  gatewayId?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

