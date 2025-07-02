// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDoctorHBaseClusterResponseBodyDataAnalysis extends $dara.Model {
  /**
   * @remarks
   * The overall score of the HBase cluster.
   * 
   * @example
   * 85
   */
  hbaseScore?: number;
  static names(): { [key: string]: string } {
    return {
      hbaseScore: 'HbaseScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hbaseScore: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

