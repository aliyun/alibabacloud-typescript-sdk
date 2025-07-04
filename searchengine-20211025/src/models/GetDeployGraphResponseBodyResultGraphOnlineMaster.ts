// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeployGraphResponseBodyResultGraphOnlineMaster extends $dara.Model {
  /**
   * @remarks
   * The name of the data center.
   * 
   * @example
   * hz_pre_vpc_domain_1
   */
  domainName?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * 5377
   */
  hippoId?: string;
  /**
   * @remarks
   * The ID of the data center.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The name of the online cluster.
   * 
   * @example
   * ha-cn-pl32rf0****_hz_pre_vpc_domain_1
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'domainName',
      hippoId: 'hippoId',
      id: 'id',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      hippoId: 'string',
      id: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

