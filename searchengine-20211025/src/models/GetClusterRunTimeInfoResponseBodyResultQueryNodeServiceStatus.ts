// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClusterRunTimeInfoResponseBodyResultQueryNodeServiceStatus extends $dara.Model {
  /**
   * @remarks
   * The process progress of QRS workers in the cluster. Unit: percentage.
   * 
   * @example
   * 100
   */
  donePercent?: number;
  /**
   * @remarks
   * The number of processed QRS workers in the cluster.
   * 
   * @example
   * 100
   */
  doneSize?: number;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * ha-cn-c4d2rq7nt04_qrs
   */
  name?: string;
  /**
   * @remarks
   * The total number of QRS workers in the cluster.
   * 
   * @example
   * 100
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      donePercent: 'donePercent',
      doneSize: 'doneSize',
      name: 'name',
      totalSize: 'totalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      donePercent: 'number',
      doneSize: 'number',
      name: 'string',
      totalSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

