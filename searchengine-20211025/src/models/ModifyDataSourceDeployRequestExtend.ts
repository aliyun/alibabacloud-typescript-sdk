// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyDataSourceDeployRequestExtendHdfs } from "./ModifyDataSourceDeployRequestExtendHdfs";
import { ModifyDataSourceDeployRequestExtendOdps } from "./ModifyDataSourceDeployRequestExtendOdps";
import { ModifyDataSourceDeployRequestExtendOss } from "./ModifyDataSourceDeployRequestExtendOss";
import { ModifyDataSourceDeployRequestExtendSaro } from "./ModifyDataSourceDeployRequestExtendSaro";


export class ModifyDataSourceDeployRequestExtend extends $dara.Model {
  /**
   * @remarks
   * The information about the Apsara File Storage for HDFS data source.
   */
  hdfs?: ModifyDataSourceDeployRequestExtendHdfs;
  /**
   * @remarks
   * The information about the MaxCompute data source.
   */
  odps?: ModifyDataSourceDeployRequestExtendOdps;
  /**
   * @remarks
   * The information about the OSS data source.
   */
  oss?: ModifyDataSourceDeployRequestExtendOss;
  /**
   * @remarks
   * The information about the SARO data source. This parameter is applicable to the SARO data source used in the intranet of Alibaba Group.
   */
  saro?: ModifyDataSourceDeployRequestExtendSaro;
  static names(): { [key: string]: string } {
    return {
      hdfs: 'hdfs',
      odps: 'odps',
      oss: 'oss',
      saro: 'saro',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hdfs: ModifyDataSourceDeployRequestExtendHdfs,
      odps: ModifyDataSourceDeployRequestExtendOdps,
      oss: ModifyDataSourceDeployRequestExtendOss,
      saro: ModifyDataSourceDeployRequestExtendSaro,
    };
  }

  validate() {
    if(this.hdfs && typeof (this.hdfs as any).validate === 'function') {
      (this.hdfs as any).validate();
    }
    if(this.odps && typeof (this.odps as any).validate === 'function') {
      (this.odps as any).validate();
    }
    if(this.oss && typeof (this.oss as any).validate === 'function') {
      (this.oss as any).validate();
    }
    if(this.saro && typeof (this.saro as any).validate === 'function') {
      (this.saro as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

