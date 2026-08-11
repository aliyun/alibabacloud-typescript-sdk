// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReindexRequest extends $dara.Model {
  /**
   * @remarks
   * The timestamp in seconds. This parameter is of the INT type. This parameter is required when the data source uses API push.
   * 
   * @example
   * 1640867288
   */
  dataTimeSec?: number;
  /**
   * @remarks
   * The OSS file path.
   * 
   * @example
   * oss://opensearch
   */
  ossDataPath?: string;
  /**
   * @remarks
   * The partition. This parameter is required when the data source is MaxCompute.
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

