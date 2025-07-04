// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClusterRunTimeInfoResponseBodyResultQueryNodeConfigStatusList extends $dara.Model {
  /**
   * @remarks
   * The time when the configuration was last updated.
   * 
   * @example
   * " "
   */
  configUpdateTime?: string;
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
   * ha-cn-zvp2qr1sk01_qrs
   */
  name?: string;
  /**
   * @remarks
   * The total number of QRS workers in the cluster.
   * 
   * @example
   * 6
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      configUpdateTime: 'configUpdateTime',
      donePercent: 'donePercent',
      doneSize: 'doneSize',
      name: 'name',
      totalSize: 'totalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configUpdateTime: 'string',
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

