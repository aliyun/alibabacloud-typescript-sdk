// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHadoopConfigsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the configuration file. Valid values:
   * 
   * *   hdfs-site
   * *   core-site
   * *   yarn-site
   * *   mapred-site
   * *   hive-site
   * 
   * @example
   * hdfs-site
   */
  configName?: string;
  /**
   * @remarks
   * The configuration value.
   * 
   * @example
   * <?xml version="1.0" ?>
   * <configuration>
   *     <property>
   *         <name>hive.exec.reducers.bytes.per.reducer</name>
   *         <value>256000000</value>
   *     </property>
   *     <property>
   *         <name>hive.stats.column.autogather</name>
   *         <value>false</value>
   *     </property>
   * </configuration>
   */
  configValue?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B4CAF581-2AC7-41AD-8940-D56DF7AADF5B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configName: 'ConfigName',
      configValue: 'ConfigValue',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configName: 'string',
      configValue: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

