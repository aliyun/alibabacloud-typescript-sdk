// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAIServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-03-01T00:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * dramatest
   */
  description?: string;
  /**
   * @remarks
   * The internal URL for API debugging.
   * 
   * @example
   * 192.168.0.1/api-docs
   */
  privateApiDevUrl?: string;
  /**
   * @remarks
   * The internal URL of the workbench.
   * 
   * @example
   * 192.168.0.1
   */
  privateWorkbenchUrl?: string;
  /**
   * @remarks
   * The public URL for API debugging.
   * 
   * @example
   * 8.8.8.8/api-docs
   */
  publicApiDevUrl?: string;
  /**
   * @remarks
   * The public URL of the workbench.
   * 
   * @example
   * 8.8.8.8
   */
  publicWorkbenchUrl?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  /**
   * @remarks
   * The list of IP addresses in the IP address whitelist, separated by commas.
   * 
   * @example
   * 127.0.0.1
   */
  securityIpList?: string;
  /**
   * @remarks
   * The service account.
   * 
   * @example
   * dramauser
   */
  serviceAccount?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * drama-123456
   */
  serviceId?: string;
  /**
   * @remarks
   * The service status. Valid values:
   * - deploying: Deploying.
   * - active: Running.
   * 
   * @example
   * active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      privateApiDevUrl: 'PrivateApiDevUrl',
      privateWorkbenchUrl: 'PrivateWorkbenchUrl',
      publicApiDevUrl: 'PublicApiDevUrl',
      publicWorkbenchUrl: 'PublicWorkbenchUrl',
      requestId: 'RequestId',
      securityIpList: 'SecurityIpList',
      serviceAccount: 'ServiceAccount',
      serviceId: 'ServiceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      privateApiDevUrl: 'string',
      privateWorkbenchUrl: 'string',
      publicApiDevUrl: 'string',
      publicWorkbenchUrl: 'string',
      requestId: 'string',
      securityIpList: 'string',
      serviceAccount: 'string',
      serviceId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

