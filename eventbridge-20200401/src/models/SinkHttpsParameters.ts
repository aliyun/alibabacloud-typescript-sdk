// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SinkHttpsParametersBody extends $dara.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class SinkHttpsParametersURL extends $dara.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
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

export class SinkHttpsParameters extends $dara.Model {
  body?: SinkHttpsParametersBody;
  method?: string;
  networkType?: string;
  securityGroupId?: string;
  token?: string;
  URL?: SinkHttpsParametersURL;
  vSwitchIds?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      method: 'Method',
      networkType: 'NetworkType',
      securityGroupId: 'SecurityGroupId',
      token: 'Token',
      URL: 'URL',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: SinkHttpsParametersBody,
      method: 'string',
      networkType: 'string',
      securityGroupId: 'string',
      token: 'string',
      URL: SinkHttpsParametersURL,
      vSwitchIds: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    if(this.URL && typeof (this.URL as any).validate === 'function') {
      (this.URL as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

