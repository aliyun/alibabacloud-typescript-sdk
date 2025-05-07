// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBProxyResponseBodyDbProxyEndpointItemsDbProxyEndpointItems extends $dara.Model {
  /**
   * @remarks
   * The description of the database proxy endpoint.
   * 
   * @example
   * proxy-test
   */
  dbProxyEndpointAliases?: string;
  /**
   * @remarks
   * The ID of the database proxy endpoint.
   * 
   * @example
   * gos787jog2wk0ye1****
   */
  dbProxyEndpointName?: string;
  /**
   * @remarks
   * The type of the database proxy endpoint. Valid values:
   * 
   * *   Custom: custom database proxy endpoint
   * *   RWSplit: default database proxy endpoint
   * 
   * @example
   * RWSplit
   */
  dbProxyEndpointType?: string;
  /**
   * @remarks
   * The read and write attributes of the database proxy endpoint.
   * 
   * *   ReadOnly
   * *   ReadWrite
   * 
   * @example
   * ReadWrite
   */
  dbProxyReadWriteMode?: string;
  static names(): { [key: string]: string } {
    return {
      dbProxyEndpointAliases: 'DbProxyEndpointAliases',
      dbProxyEndpointName: 'DbProxyEndpointName',
      dbProxyEndpointType: 'DbProxyEndpointType',
      dbProxyReadWriteMode: 'DbProxyReadWriteMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbProxyEndpointAliases: 'string',
      dbProxyEndpointName: 'string',
      dbProxyEndpointType: 'string',
      dbProxyReadWriteMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

