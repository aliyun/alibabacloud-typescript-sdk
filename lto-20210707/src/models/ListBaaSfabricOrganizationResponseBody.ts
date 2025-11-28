// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBaaSFabricOrganizationResponseBodyData extends $dara.Model {
  baaSFabricOrganizationId?: string;
  baaSFabricOrganizationName?: string;
  static names(): { [key: string]: string } {
    return {
      baaSFabricOrganizationId: 'BaaSFabricOrganizationId',
      baaSFabricOrganizationName: 'BaaSFabricOrganizationName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baaSFabricOrganizationId: 'string',
      baaSFabricOrganizationName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBaaSFabricOrganizationResponseBody extends $dara.Model {
  code?: string;
  data?: ListBaaSFabricOrganizationResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': ListBaaSFabricOrganizationResponseBodyData },
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

