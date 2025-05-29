// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceSSLRequest extends $dara.Model {
  /**
   * @remarks
   * The encrypted endpoint. By default, the wildcards are used for instances that are hosted on ECS instances. This way, the endpoints that can be resolved to the same IP address are encrypted.
   * 
   * @example
   * gp-xxxxxxxxxxx-master.gpdbmaster.singapore.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The status of SSL encryption. Valid values:
   * 
   * *   0: disables SSL encryption.
   * *   1: enables SSL encryption.
   * *   2: updates SSL encryption.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  SSLEnabled?: number;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      DBInstanceId: 'DBInstanceId',
      SSLEnabled: 'SSLEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      DBInstanceId: 'string',
      SSLEnabled: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

