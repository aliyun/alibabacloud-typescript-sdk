// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCmsServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the service or product is activated.
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * PROM_NOT_OPEN: Prometheus is not activated.SLS_NOT_OPEN: Simple Log Service (SLS), a dependency of Prometheus, is not activated.CMS_SLR_NOT_EXIST: The service-linked role (SLR) for CloudMonitor does not exist.SLS_SLR_NOT_EXIST: The SLR for SLS does not exist.
   * 
   * @example
   * PROM_NOT_OPEN
   */
  errorCode?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8FDE2569-626B-5176-9844-28877A*****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
      errorCode: 'errorCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      errorCode: 'string',
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

