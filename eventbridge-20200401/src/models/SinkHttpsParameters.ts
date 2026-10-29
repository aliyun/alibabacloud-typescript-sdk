// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SinkHttpsParametersBody extends $dara.Model {
  /**
   * @remarks
   * Form
   * 
   * @example
   * TEMPLATE
   */
  form?: string;
  /**
   * @remarks
   * Template
   * 
   * @example
   * {"message":"${message}"}
   */
  template?: string;
  /**
   * @remarks
   * Value
   * 
   * @example
   * {"message":"$.data.message"}
   */
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
  /**
   * @remarks
   * Form
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * Template
   * 
   * @example
   * https://${host}/events
   */
  template?: string;
  /**
   * @remarks
   * Value
   * 
   * @example
   * https://example.com/events
   */
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
  /**
   * @remarks
   * HTTP Body
   */
  body?: SinkHttpsParametersBody;
  /**
   * @remarks
   * The HTTP method.
   * 
   * @example
   * POST
   */
  method?: string;
  /**
   * @remarks
   * The network type, PrivateNetwork/PublicNetwork.
   * 
   * @example
   * PublicNetwork
   */
  networkType?: string;
  /**
   * @remarks
   * The security group.
   * 
   * @example
   * sg-a1b2c3d4e5f6g7h8i9j0
   */
  securityGroupId?: string;
  /**
   * @remarks
   * HTTP Token
   * 
   * @example
   * token-****
   */
  token?: string;
  /**
   * @remarks
   * The HTTP/HTTPS address.
   */
  URL?: SinkHttpsParametersURL;
  /**
   * @remarks
   * The vSwitch IDs.
   * 
   * @example
   * vsw-a1b2c3d4e5f6g7h8i9j0k
   */
  vSwitchIds?: string;
  /**
   * @remarks
   * vpc ID
   * 
   * @example
   * vpc-a1b2c3d4e5f6g7h8i9j0k
   */
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

