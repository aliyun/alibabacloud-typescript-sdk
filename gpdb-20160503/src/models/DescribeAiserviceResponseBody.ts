// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAIServiceResponseBody extends $dara.Model {
  /**
   * @example
   * 2026-03-01T00:00:00Z
   */
  createTime?: string;
  /**
   * @example
   * dramatest
   */
  description?: string;
  /**
   * @example
   * 192.168.0.1/api-docs
   */
  privateApiDevUrl?: string;
  /**
   * @example
   * 192.168.0.1
   */
  privateWorkbenchUrl?: string;
  /**
   * @example
   * 8.8.8.8/api-docs
   */
  publicApiDevUrl?: string;
  /**
   * @example
   * 8.8.8.8
   */
  publicWorkbenchUrl?: string;
  /**
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  /**
   * @example
   * 127.0.0.1
   */
  securityIpList?: string;
  /**
   * @example
   * dramauser
   */
  serviceAccount?: string;
  /**
   * @example
   * drama-123456
   */
  serviceId?: string;
  /**
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

