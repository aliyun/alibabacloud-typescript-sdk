// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListGatewayDomainResponseBodyDataComment } from "./ListGatewayDomainResponseBodyDataComment";


export class ListGatewayDomainResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the certificate expires.
   * 
   * @example
   * 2031-03-30 02:35:12
   */
  certBeforeDate?: string;
  /**
   * @remarks
   * The certificate ID.
   * 
   * @example
   * 3452-cn-hangzhou
   */
  certIdentifier?: string;
  /**
   * @remarks
   * The route comment. This parameter is returned only in ingress scenarios.
   */
  comment?: ListGatewayDomainResponseBodyDataComment;
  /**
   * @remarks
   * The gateway ID.
   * 
   * @example
   * 12
   */
  gatewayId?: number;
  /**
   * @remarks
   * The time when the domain name was created.
   * 
   * @example
   * 2031-03-30 02:35:12
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the domain name was updated.
   * 
   * @example
   * 2031-03-30 02:35:12
   */
  gmtModified?: string;
  /**
   * @remarks
   * Indicates whether `HTTP/2` is enabled.
   * 
   * *   `open`: `HTTP/2` is enabled.
   * *   `close`: `HTTP/2` is disabled.
   * *   `globalConfig`: Global configurations are used.
   * 
   * @example
   * close
   */
  http2?: string;
  /**
   * @remarks
   * The ID of the domain name.
   * 
   * @example
   * 243
   */
  id?: number;
  isManaged?: boolean;
  /**
   * @remarks
   * Indicates whether HTTPS is forcefully used.
   * 
   * @example
   * true
   */
  mustHttps?: boolean;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * test.com
   */
  name?: string;
  /**
   * @remarks
   * The protocol.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * The state of the domain name. Valid values:
   * 
   * *   0: unpublished
   * *   2: publishing
   * *   3: published
   * *   4: editing
   * *   5: unpublishing
   * *   6: unavailable
   * 
   * @example
   * 3
   */
  status?: number;
  /**
   * @remarks
   * The maximum version of Transport Layer Security (TLS).
   * 
   * @example
   * TLS 1.3
   */
  tlsMax?: string;
  /**
   * @remarks
   * The minimum version of TLS.
   * 
   * @example
   * TLS 1.0
   */
  tlsMin?: string;
  /**
   * @remarks
   * The type of the domain name source. Valid values:
   * 
   * *   Op: console
   * *   Ingress: MSE Ingress
   * 
   * @example
   * Op
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      certBeforeDate: 'CertBeforeDate',
      certIdentifier: 'CertIdentifier',
      comment: 'Comment',
      gatewayId: 'GatewayId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      http2: 'Http2',
      id: 'Id',
      isManaged: 'IsManaged',
      mustHttps: 'MustHttps',
      name: 'Name',
      protocol: 'Protocol',
      status: 'Status',
      tlsMax: 'TlsMax',
      tlsMin: 'TlsMin',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certBeforeDate: 'string',
      certIdentifier: 'string',
      comment: ListGatewayDomainResponseBodyDataComment,
      gatewayId: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      http2: 'string',
      id: 'number',
      isManaged: 'boolean',
      mustHttps: 'boolean',
      name: 'string',
      protocol: 'string',
      status: 'number',
      tlsMax: 'string',
      tlsMin: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.comment && typeof (this.comment as any).validate === 'function') {
      (this.comment as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

