// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClusterRunTimeInfoResponseBodyResultDataNodesConfigStatusList extends $dara.Model {
  /**
   * @remarks
   * The time when the configuration was last updated.
   * 
   * @example
   * ""
   */
  configUpdateTime?: string;
  /**
   * @remarks
   * The configuration progress. Unit: percentage.
   * 
   * @example
   * 100
   */
  donePercent?: number;
  /**
   * @remarks
   * The number of processed Searcher workers in the cluster.
   * 
   * @example
   * 1
   */
  doneSize?: number;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * test_0704
   */
  name?: string;
  /**
   * @remarks
   * The total number of Searcher workers in the cluster.
   * 
   * @example
   * 0
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

