// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPermApplyOrderDetailResponseBodyPermApplyOrderDetailResourcesInstanceInfo extends $dara.Model {
  /**
   * @remarks
   * The type of the database engine.
   * 
   * @example
   * MySQL
   */
  dbType?: string;
  /**
   * @remarks
   * The ID of the database administrator (DBA) of the instance.
   * 
   * @example
   * 12345
   */
  dbaId?: number;
  /**
   * @remarks
   * The nickname of the DBA of the instance.
   * 
   * @example
   * test_dba
   */
  dbaNickName?: string;
  /**
   * @remarks
   * The type of the environment to which the instance belongs. For more information, see [Change the environment type of an instance](https://help.aliyun.com/document_detail/163309.html).
   * 
   * @example
   * product
   */
  envType?: string;
  /**
   * @remarks
   * The endpoint of the instance.
   * 
   * @example
   * xxxx
   */
  host?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * 12345
   */
  instanceId?: string;
  /**
   * @remarks
   * The IDs of the owners of the instance.
   */
  ownerIds?: number[];
  /**
   * @remarks
   * The nicknames of the owners of the instance.
   */
  ownerNickName?: string[];
  /**
   * @remarks
   * The port that is used to connect to the instance.
   * 
   * @example
   * 3306
   */
  port?: number;
  /**
   * @remarks
   * The name that is used to search for the instance.
   * 
   * @example
   * xxxx:3306
   */
  searchName?: string;
  static names(): { [key: string]: string } {
    return {
      dbType: 'DbType',
      dbaId: 'DbaId',
      dbaNickName: 'DbaNickName',
      envType: 'EnvType',
      host: 'Host',
      instanceId: 'InstanceId',
      ownerIds: 'OwnerIds',
      ownerNickName: 'OwnerNickName',
      port: 'Port',
      searchName: 'SearchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbType: 'string',
      dbaId: 'number',
      dbaNickName: 'string',
      envType: 'string',
      host: 'string',
      instanceId: 'string',
      ownerIds: { 'type': 'array', 'itemType': 'number' },
      ownerNickName: { 'type': 'array', 'itemType': 'string' },
      port: 'number',
      searchName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ownerIds)) {
      $dara.Model.validateArray(this.ownerIds);
    }
    if(Array.isArray(this.ownerNickName)) {
      $dara.Model.validateArray(this.ownerNickName);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

