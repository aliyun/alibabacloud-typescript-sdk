// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SimplyAddInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test***
   */
  databasePassword?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * abc
   */
  databaseUser?: string;
  /**
   * @example
   * 192.XXX.0.56
   */
  host?: string;
  /**
   * @example
   * rm****
   */
  instanceId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  instanceRegion?: string;
  /**
   * @example
   * 5432
   */
  port?: number;
  realLoginUserUid?: string;
  static names(): { [key: string]: string } {
    return {
      databasePassword: 'DatabasePassword',
      databaseUser: 'DatabaseUser',
      host: 'Host',
      instanceId: 'InstanceId',
      instanceRegion: 'InstanceRegion',
      port: 'Port',
      realLoginUserUid: 'RealLoginUserUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databasePassword: 'string',
      databaseUser: 'string',
      host: 'string',
      instanceId: 'string',
      instanceRegion: 'string',
      port: 'number',
      realLoginUserUid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

