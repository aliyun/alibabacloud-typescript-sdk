// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartOfflineTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The degree of task parallelism.
   * 
   * @example
   * 4
   */
  parallelism?: number;
  /**
   * @remarks
   * The start offset.
   * 
   * @example
   * 1747900639
   */
  timestamp?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      parallelism: 'parallelism',
      timestamp: 'timestamp',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parallelism: 'number',
      timestamp: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

