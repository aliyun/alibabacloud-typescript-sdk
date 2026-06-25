// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppServicesPageRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 6dcc8c9e-d3da-478a-a066-86dcf820****
   */
  appId?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size. The value must be an integer from 0 to 9,999.
   * 
   * @example
   * 9999
   */
  pageSize?: number;
  /**
   * @remarks
   * The service type. Valid values:
   * 
   * - **Dubbo**
   * 
   * - **Spring Cloud**
   * 
   * This parameter is required.
   * 
   * @example
   * springCloud
   */
  serviceType?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      serviceType: 'ServiceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      serviceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

