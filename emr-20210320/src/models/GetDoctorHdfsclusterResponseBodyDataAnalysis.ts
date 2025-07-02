// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDoctorHDFSClusterResponseBodyDataAnalysis extends $dara.Model {
  /**
   * @remarks
   * The overall score of HDFS storage resources.
   * 
   * @example
   * 55
   */
  hdfsScore?: number;
  static names(): { [key: string]: string } {
    return {
      hdfsScore: 'HdfsScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hdfsScore: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

