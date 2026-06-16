// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomDomainsRequest extends $dara.Model {
  /**
   * @remarks
   * The custom domain name.
   * 
   * @example
   * mydomain.com
   */
  domainName?: string;
  /**
   * @remarks
   * The domain type used for filtering. Valid values: STANDARD and SANDBOX.
   */
  domainType?: string;
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
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the resource associated with the custom domain.
   * 
   * @example
   * agent-1
   */
  resourceName?: string;
  /**
   * @remarks
   * The type of the resource associated with the custom domain.
   * 
   * @example
   * runtime
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'domainName',
      domainType: 'domainType',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      resourceName: 'resourceName',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      domainType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceName: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

