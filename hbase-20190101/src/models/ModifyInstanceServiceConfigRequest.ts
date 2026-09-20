// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceServiceConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of target instance. You can call the [DescribeInstances](https://help.aliyun.com/document_detail/144595.html) operation to obtain target instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * hb-t4naqsay5gn****
   */
  clusterId?: string;
  /**
   * @remarks
   * <props="china">The name of the configuration item to modify. You can call the [ListInstanceServiceConfigurations](https://help.aliyun.com/document_detail/201980.html) operation to query the configuration item name.
   * <props="intl">The name of the configuration item to modify.
   * 
   * > If you want to modify multiple configuration items, specify the Parameters parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * hbase#hbase-site.xml#hbase.client.keyvalue.maxsize
   */
  configureName?: string;
  /**
   * @remarks
   * <props="china">The value of the configuration item to modify. You can call the [ListInstanceServiceConfigurations](https://help.aliyun.com/document_detail/201980.html) operation to query the configuration item value.
   * <props="intl">The value of the configuration item to modify.
   * 
   * > If you want to modify multiple configuration items, specify the Parameters parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 10485770
   */
  configureValue?: string;
  /**
   * @remarks
   * The JSON-formatted parameters for modifying multiple configuration items. The key specifies the name of the configuration item, and the value specifies the value of the configuration item.
   * 
   * @example
   * {"key1=value1", "key2=value2"}
   */
  parameters?: string;
  /**
   * @remarks
   * Specifies whether to restart the instance after the configuration is modified. Valid values:
   * 
   * - **true**: Restart the instance.
   * - **false**: Do not restart the instance.
   * 
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

