// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterAttributeResponseBodyDBClusterScaleOutStatus extends $dara.Model {
  /**
   * @remarks
   * The progress of the data migration task in percentage.
   * 
   * >  This parameter is returned only when the cluster is in the SCALING_OUT state.
   * 
   * @example
   * 0
   */
  progress?: string;
  /**
   * @remarks
   * The progress of the data migration task. This value is displayed in the following format: Data volume that has been migrated/Total data volume.
   * 
   * >  This parameter is returned only when the cluster is in the SCALING_OUT state.
   * 
   * @example
   * 0MB/60469MB
   */
  ratio?: string;
  static names(): { [key: string]: string } {
    return {
      progress: 'Progress',
      ratio: 'Ratio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      progress: 'string',
      ratio: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

