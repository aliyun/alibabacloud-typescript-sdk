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
   * PROM_NOT_OPEN: Prometheus is not activated.
   * SLS_NOT_OPEN: Simple Log Service, which Prometheus depends on, is not activated.
   * CMS_SLR_NOT_EXIST: The CloudMonitor service-linked role is not created.
   * SLS_SLR_NOT_EXIST: The Simple Log Service service-linked role is not created.
   * 
   * @example
   * PROM_NOT_OPEN
   */
  errorCode?: string;
  /**
   * @remarks
   * Id of the request
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

