// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExternalStore extends $dara.Model {
  /**
   * @remarks
   * The name of the external store. The name must be unique in a project and must be different from Logstore names.
   * 
   * This parameter is required.
   * 
   * @example
   * rds_store
   */
  externalStoreName?: string;
  /**
   * @remarks
   * The parameters that are configured for the external store.
   * 
   * This parameter is required.
   * 
   * @example
   * { 		"vpc-id": "vpc-bp1aevy8sofi8mh1q****", 		"instance-id": "i-bp1b6c719dfa08exf****", 		"host": "192.168.XX.XX", 		"port": "3306", 		"username": "root", 		"password": "sfdsfldsfksfls****", 		"db": "meta", 		"table": "join_meta", 		"region": "cn-qingdao" 	}
   */
  parameter?: { [key: string]: any };
  /**
   * @remarks
   * The storage type. Set the value to rds-vpc, which indicates a database on an ApsaraDB RDS for MySQL instance in a virtual private cloud (VPC).
   * 
   * This parameter is required.
   * 
   * @example
   * rds-vpc
   */
  storeType?: string;
  static names(): { [key: string]: string } {
    return {
      externalStoreName: 'externalStoreName',
      parameter: 'parameter',
      storeType: 'storeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalStoreName: 'string',
      parameter: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      storeType: 'string',
    };
  }

  validate() {
    if(this.parameter) {
      $dara.Model.validateMap(this.parameter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

