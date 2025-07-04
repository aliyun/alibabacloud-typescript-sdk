// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReindexRequest extends $dara.Model {
  /**
   * @remarks
   * The timestamp in seconds. The value must be of the INTEGER type. This parameter is required if you specify an API data source.
   * 
   * @example
   * 1640867288
   */
  dataTimeSec?: number;
  /**
   * @remarks
   * oss data path
   * 
   * @example
   * oss://opensearch
   */
  ossDataPath?: string;
  /**
   * @remarks
   * The partition in the MaxCompute table. This parameter is required if type is set to odps.
   * 
   * @example
   * ds=20220713
   */
  partition?: string;
  static names(): { [key: string]: string } {
    return {
      dataTimeSec: 'dataTimeSec',
      ossDataPath: 'ossDataPath',
      partition: 'partition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataTimeSec: 'number',
      ossDataPath: 'string',
      partition: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

