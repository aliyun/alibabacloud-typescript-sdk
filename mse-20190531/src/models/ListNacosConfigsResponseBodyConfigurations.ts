// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNacosConfigsResponseBodyConfigurations extends $dara.Model {
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * test
   */
  appName?: string;
  /**
   * @remarks
   * The ID of the configuration.
   * 
   * @example
   * log.yaml
   */
  dataId?: string;
  /**
   * @remarks
   * The ID of the group.
   * 
   * @example
   * public
   */
  group?: string;
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * 132****
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      dataId: 'DataId',
      group: 'Group',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      dataId: 'string',
      group: 'string',
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

