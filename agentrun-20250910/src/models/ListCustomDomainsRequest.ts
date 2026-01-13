// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomDomainsRequest extends $dara.Model {
  /**
   * @example
   * mydomain.com
   */
  domainName?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * agent-1
   */
  resourceName?: string;
  /**
   * @example
   * runtime
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'domainName',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      resourceName: 'resourceName',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
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

