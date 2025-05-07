// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpointsDBInstanceEndpoint } from "./DescribeDbinstanceEndpointsResponseBodyDataDbinstanceEndpointsDbinstanceEndpoint";


export class DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpoints extends $dara.Model {
  DBInstanceEndpoint?: DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpointsDBInstanceEndpoint[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceEndpoint: 'DBInstanceEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceEndpoint: { 'type': 'array', 'itemType': DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpointsDBInstanceEndpoint },
    };
  }

  validate() {
    if(Array.isArray(this.DBInstanceEndpoint)) {
      $dara.Model.validateArray(this.DBInstanceEndpoint);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

