// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushingTargetHttpRequestTargetHeaders extends $dara.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushingTargetHttpRequestTarget extends $dara.Model {
  contentType?: string;
  encryptSignatureKey?: string;
  encryptString?: string;
  encryptTimestampKey?: string;
  headers?: PushingTargetHttpRequestTargetHeaders[];
  method?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      contentType: 'ContentType',
      encryptSignatureKey: 'EncryptSignatureKey',
      encryptString: 'EncryptString',
      encryptTimestampKey: 'EncryptTimestampKey',
      headers: 'Headers',
      method: 'Method',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'string',
      encryptSignatureKey: 'string',
      encryptString: 'string',
      encryptTimestampKey: 'string',
      headers: { 'type': 'array', 'itemType': PushingTargetHttpRequestTargetHeaders },
      method: 'string',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.headers)) {
      $dara.Model.validateArray(this.headers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushingTarget extends $dara.Model {
  arn?: string;
  createTime?: string;
  description?: string;
  httpRequestTarget?: PushingTargetHttpRequestTarget;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  range?: string;
  templateUuid?: string;
  type?: string;
  updateTime?: string;
  userId?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      createTime: 'CreateTime',
      description: 'Description',
      httpRequestTarget: 'HttpRequestTarget',
      name: 'Name',
      range: 'Range',
      templateUuid: 'TemplateUuid',
      type: 'Type',
      updateTime: 'UpdateTime',
      userId: 'UserId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      createTime: 'string',
      description: 'string',
      httpRequestTarget: PushingTargetHttpRequestTarget,
      name: 'string',
      range: 'string',
      templateUuid: 'string',
      type: 'string',
      updateTime: 'string',
      userId: 'string',
      uuid: 'string',
    };
  }

  validate() {
    if(this.httpRequestTarget && typeof (this.httpRequestTarget as any).validate === 'function') {
      (this.httpRequestTarget as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

