// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetYzdStsAKResponseBodyData extends $dara.Model {
  appId?: string;
  bucket?: string;
  endpoint?: string;
  id?: string;
  internalKnowledgeId?: string;
  path?: string;
  secret?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      bucket: 'bucket',
      endpoint: 'endpoint',
      id: 'id',
      internalKnowledgeId: 'internalKnowledgeId',
      path: 'path',
      secret: 'secret',
      token: 'token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      bucket: 'string',
      endpoint: 'string',
      id: 'string',
      internalKnowledgeId: 'string',
      path: 'string',
      secret: 'string',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetYzdStsAKResponseBody extends $dara.Model {
  code?: string;
  data?: GetYzdStsAKResponseBodyData;
  msg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetYzdStsAKResponseBodyData,
      msg: 'string',
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

