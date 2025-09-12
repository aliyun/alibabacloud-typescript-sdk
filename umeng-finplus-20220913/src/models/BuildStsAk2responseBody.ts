// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BuildStsAK2ResponseBodyData extends $dara.Model {
  bucket?: string;
  endpoint?: string;
  id?: string;
  path?: string;
  secret?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'bucket',
      endpoint: 'endpoint',
      id: 'id',
      path: 'path',
      secret: 'secret',
      token: 'token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      endpoint: 'string',
      id: 'string',
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

export class BuildStsAK2ResponseBody extends $dara.Model {
  code?: string;
  data?: BuildStsAK2ResponseBodyData;
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
      data: BuildStsAK2ResponseBodyData,
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

