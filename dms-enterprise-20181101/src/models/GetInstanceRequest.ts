// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The endpoint of the database instance. You can call the [ListInstances](https://help.aliyun.com/document_detail/141936.html) operation to obtain the endpoint.
   * 
   * This parameter is required.
   * 
   * @example
   * 172.17.XXX.XXX
   */
  host?: string;
  /**
   * @remarks
   * The port number that is used to connect to the database instance. You can call the [ListInstances](https://help.aliyun.com/document_detail/141936.html) operation to obtain the port number.
   * 
   * This parameter is required.
   * 
   * @example
   * 5432
   */
  port?: number;
  /**
   * @remarks
   * The system ID (SID) of the database instance. You can call the [ListInstances](https://help.aliyun.com/document_detail/141936.html) operation to obtain the SID.
   * 
   * @example
   * test
   */
  sid?: string;
  /**
   * @remarks
   * The ID of the tenant. You can call the [GetUserActiveTenant](https://help.aliyun.com/document_detail/198073.html) operation to obtain the tenant ID.
   * 
   * @example
   * 2***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      port: 'Port',
      sid: 'Sid',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      port: 'number',
      sid: 'string',
      tid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

