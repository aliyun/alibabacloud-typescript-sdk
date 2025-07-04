// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeployGraphResponseBodyResultGraphTableMetas extends $dara.Model {
  /**
   * @remarks
   * The ID of the offline deployment.
   * 
   * @example
   * 1
   */
  buildDeployId?: number;
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
   * The name of the data source.
   * 
   * @example
   * ha-cn-pl32rf0****_test_api
   */
  name?: string;
  /**
   * @remarks
   * The deployment ID of the table.
   * 
   * @example
   * 2177
   */
  tableDeployId?: number;
  /**
   * @remarks
   * The tag.
   * 
   * @example
   * ha-cn-pl32rf0****_test_api_hz_pre_vpc_domain_1
   */
  tag?: string;
  /**
   * @remarks
   * The type of the data source.
   * 
   * @example
   * odps
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      buildDeployId: 'buildDeployId',
      domainName: 'domainName',
      name: 'name',
      tableDeployId: 'tableDeployId',
      tag: 'tag',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildDeployId: 'number',
      domainName: 'string',
      name: 'string',
      tableDeployId: 'number',
      tag: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

