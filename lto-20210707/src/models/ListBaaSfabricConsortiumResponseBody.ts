// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBaaSFabricConsortiumResponseBodyData extends $dara.Model {
  baaSFabricConsortiumId?: string;
  baaSFabricConsortiumName?: string;
  static names(): { [key: string]: string } {
    return {
      baaSFabricConsortiumId: 'BaaSFabricConsortiumId',
      baaSFabricConsortiumName: 'BaaSFabricConsortiumName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baaSFabricConsortiumId: 'string',
      baaSFabricConsortiumName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBaaSFabricConsortiumResponseBody extends $dara.Model {
  code?: string;
  data?: ListBaaSFabricConsortiumResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': ListBaaSFabricConsortiumResponseBodyData },
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

