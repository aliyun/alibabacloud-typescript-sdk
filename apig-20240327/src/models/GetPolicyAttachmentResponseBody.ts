// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPolicyAttachmentResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Attached Resource ID
   * 
   * @example
   * op-csbkd9llhtgqhqua***
   */
  attachResourceId?: string;
  /**
   * @remarks
   * Attached resource type, HttpApi, GatewayRoute, Operation, GatewayService, GatewayServicePort, Gateway, Domain
   * 
   * @example
   * Operation
   */
  attachResourceType?: string;
  /**
   * @remarks
   * Policy attachment configuration
   * 
   * @example
   * {"unitNum":1,"timeUnit":"s","enable":true}
   */
  config?: string;
  /**
   * @remarks
   * Environment ID
   * 
   * @example
   * env-cq7l5s5lhtgi6qa***
   */
  environmentId?: string;
  /**
   * @remarks
   * Gateway Instance ID
   * 
   * @example
   * gw-cq2vundlhtg***
   */
  gatewayId?: string;
  /**
   * @remarks
   * Policy Attachment ID
   * 
   * @example
   * pr-cqoojualhtgquuj***
   */
  policyAttachmentId?: string;
  /**
   * @remarks
   * Policy ID
   * 
   * @example
   * p-cq7l5s5bblhtgi6qas***
   */
  policyId?: string;
  static names(): { [key: string]: string } {
    return {
      attachResourceId: 'attachResourceId',
      attachResourceType: 'attachResourceType',
      config: 'config',
      environmentId: 'environmentId',
      gatewayId: 'gatewayId',
      policyAttachmentId: 'policyAttachmentId',
      policyId: 'policyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachResourceId: 'string',
      attachResourceType: 'string',
      config: 'string',
      environmentId: 'string',
      gatewayId: 'string',
      policyAttachmentId: 'string',
      policyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyAttachmentResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Response data.
   */
  data?: GetPolicyAttachmentResponseBodyData;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * 2C3B9A12-3868-5EB9-fBEA-F99E03DD1***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetPolicyAttachmentResponseBodyData,
      message: 'string',
      requestId: 'string',
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

