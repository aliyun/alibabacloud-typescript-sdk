// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHadoopConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the configuration file. Valid values:
   * 
   * - hdfs-site: hdfs-site.xml file
   * 
   * - core-site: core-site.xml file
   * 
   * - yarn-site: yarn-site.xml file
   * 
   * - mapred-site: mapred-site.xml file
   * 
   * - hive-site: hive-site.xml file
   * 
   * This parameter is required.
   * 
   * @example
   * hdfs-site
   */
  configName?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The EMR instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c-xxx
   */
  emrInstanceId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/86912.html) operation to query available region IDs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      configName: 'ConfigName',
      DBInstanceId: 'DBInstanceId',
      emrInstanceId: 'EmrInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configName: 'string',
      DBInstanceId: 'string',
      emrInstanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

