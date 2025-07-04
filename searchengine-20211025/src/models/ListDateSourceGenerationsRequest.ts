// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDateSourceGenerationsRequest extends $dara.Model {
  /**
   * @remarks
   * The data center where the data source is deployed.
   * 
   * This parameter is required.
   * 
   * @example
   * bj_vpc_domain_1
   */
  domainName?: string;
  /**
   * @remarks
   * Specifies the index versions to be returned. Valid values:
   * 
   * 1.  true (default): returns the index versions that are complete and not expired.
   * 2.  false: returns all index versions.
   * 
   * @example
   * true
   */
  validStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      domainName: 'domainName',
      validStatus: 'validStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      validStatus: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

