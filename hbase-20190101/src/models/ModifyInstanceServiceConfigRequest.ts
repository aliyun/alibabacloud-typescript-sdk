// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceServiceConfigRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hb-t4naqsay5gn****
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hbase#hbase-site.xml#hbase.client.keyvalue.maxsize
   */
  configureName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10485770
   */
  configureValue?: string;
  /**
   * @example
   * {"key1=value1", "key2=value2"}
   */
  parameters?: string;
  /**
   * @example
   * false
   */
  restart?: boolean;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      configureName: 'ConfigureName',
      configureValue: 'ConfigureValue',
      parameters: 'Parameters',
      restart: 'Restart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      configureName: 'string',
      configureValue: 'string',
      parameters: 'string',
      restart: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

