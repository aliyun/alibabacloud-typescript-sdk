// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAllBizChainContractResponseBodyData extends $dara.Model {
  contractName?: string;
  contractTemplateId?: string;
  invokeType?: string;
  static names(): { [key: string]: string } {
    return {
      contractName: 'ContractName',
      contractTemplateId: 'ContractTemplateId',
      invokeType: 'InvokeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contractName: 'string',
      contractTemplateId: 'string',
      invokeType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllBizChainContractResponseBody extends $dara.Model {
  code?: string;
  data?: ListAllBizChainContractResponseBodyData[];
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: { 'type': 'array', 'itemType': ListAllBizChainContractResponseBodyData },
      httpStatusCode: 'number',
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

