// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCaInstanceCrlAddressResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status of the CA instance.
   * 
   * @example
   * normal
   */
  caInstanceStatus?: string;
  /**
   * @remarks
   * The cron expression.
   * 
   * @example
   * https://crl-cn-publish.oss-cn-hangzhou.aliyuncs.com/pca/crl/35118048/1f0be094-14bd-6caa-bd7f-db45730d510a.crl
   */
  crlUrl?: string;
  /**
   * @remarks
   * Used to identify whether there are new revoked certificates in the revocation list.
   * 
   * @example
   * 5481d1b1228fXXX40ee70dc8cd
   */
  hashCode?: string;
  /**
   * @remarks
   * The next update time of the revocation list.
   * 
   * @example
   * 1778688000000
   */
  nextUpdateTime?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * C53C2341-F321-55A5-895C-D0746E6DA58E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      caInstanceStatus: 'CaInstanceStatus',
      crlUrl: 'CrlUrl',
      hashCode: 'HashCode',
      nextUpdateTime: 'NextUpdateTime',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caInstanceStatus: 'string',
      crlUrl: 'string',
      hashCode: 'string',
      nextUpdateTime: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

