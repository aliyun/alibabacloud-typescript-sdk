// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeployGraphResponseBodyResultGraphIndexMetas extends $dara.Model {
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
   * The index name.
   * 
   * @example
   * test_api
   */
  name?: string;
  /**
   * @remarks
   * The deployment ID of the table.
   * 
   * @example
   * 2409
   */
  tableDeployId?: number;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * ha-cn-pl32rf0****_test_api
   */
  tableName?: string;
  /**
   * @remarks
   * The tag.
   * 
   * @example
   * test_api_hz_pre_vpc_domain_1
   */
  tag?: string;
  /**
   * @remarks
   * The name of the QRS worker.
   * 
   * @example
   * ha-cn-pl32rf0****_qrs
   */
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'domainName',
      name: 'name',
      tableDeployId: 'tableDeployId',
      tableName: 'tableName',
      tag: 'tag',
      zoneName: 'zoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      name: 'string',
      tableDeployId: 'number',
      tableName: 'string',
      tag: 'string',
      zoneName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

