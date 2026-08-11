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
   * The valid status. Default value: true.
   * 
   * 1. true: Returns generations for which the task is completed and not expired.
   * 2. false: Returns all generations.
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

