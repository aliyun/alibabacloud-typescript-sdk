// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDataSourceDeployResponseBodyResultExtendHdfs } from "./GetDataSourceDeployResponseBodyResultExtendHdfs";
import { GetDataSourceDeployResponseBodyResultExtendOdps } from "./GetDataSourceDeployResponseBodyResultExtendOdps";
import { GetDataSourceDeployResponseBodyResultExtendOss } from "./GetDataSourceDeployResponseBodyResultExtendOss";
import { GetDataSourceDeployResponseBodyResultExtendSaro } from "./GetDataSourceDeployResponseBodyResultExtendSaro";


export class GetDataSourceDeployResponseBodyResultExtend extends $dara.Model {
  hdfs?: GetDataSourceDeployResponseBodyResultExtendHdfs;
  odps?: GetDataSourceDeployResponseBodyResultExtendOdps;
  oss?: GetDataSourceDeployResponseBodyResultExtendOss;
  saro?: GetDataSourceDeployResponseBodyResultExtendSaro;
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
      hdfs: GetDataSourceDeployResponseBodyResultExtendHdfs,
      odps: GetDataSourceDeployResponseBodyResultExtendOdps,
      oss: GetDataSourceDeployResponseBodyResultExtendOss,
      saro: GetDataSourceDeployResponseBodyResultExtendSaro,
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

