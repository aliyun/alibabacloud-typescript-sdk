// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNacosHistoryConfigsResponseBodyHistoryItems extends $dara.Model {
  /**
   * @remarks
   * The application tag.
   * 
   * @example
   * gateway
   */
  appName?: string;
  /**
   * @remarks
   * The ID of the data.
   * 
   * @example
   * test.yaml
   */
  dataId?: string;
  /**
   * @remarks
   * The name of the group.
   * 
   * @example
   * default
   */
  group?: string;
  /**
   * @remarks
   * The ID of the configuration.
   * 
   * @example
   * 23fdsf
   */
  id?: number;
  /**
   * @remarks
   * The timestamp when the configuration was last modified.
   * 
   * @example
   * 16434400
   */
  lastModifiedTime?: number;
  /**
   * @remarks
   * The format of the configuration file.
   * 
   * @example
   * yaml
   */
  opType?: string;
  srcUser?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      dataId: 'DataId',
      group: 'Group',
      id: 'Id',
      lastModifiedTime: 'LastModifiedTime',
      opType: 'OpType',
      srcUser: 'SrcUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      dataId: 'string',
      group: 'string',
      id: 'number',
      lastModifiedTime: 'number',
      opType: 'string',
      srcUser: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

