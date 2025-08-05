// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRecoverableOtsInstancesResponseBodyOtsInstances extends $dara.Model {
  /**
   * @remarks
   * The name of the Tablestore instance that can be restored.
   * 
   * @example
   * instancename
   */
  instanceName?: string;
  /**
   * @remarks
   * The names of the tables in the Tablestore instance.
   */
  tableNames?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      tableNames: 'TableNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      tableNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tableNames)) {
      $dara.Model.validateArray(this.tableNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecoverableOtsInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned message. If the request was successful, "successful" is returned. If the request failed, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The list of Tablestore instances that can be restored and the tables in the instances.
   */
  otsInstances?: DescribeRecoverableOtsInstancesResponseBodyOtsInstances[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 14DC089E-5DD3-5028-AEDB-93D78E11DB2A
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      otsInstances: 'OtsInstances',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      otsInstances: { 'type': 'array', 'itemType': DescribeRecoverableOtsInstancesResponseBodyOtsInstances },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.otsInstances)) {
      $dara.Model.validateArray(this.otsInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

