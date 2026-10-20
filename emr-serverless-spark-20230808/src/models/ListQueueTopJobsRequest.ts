// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQueueTopJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The maximum number of jobs to return. The maximum value is 10.
   * 
   * @example
   * 10
   */
  topN?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'regionId',
      topN: 'topN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      topN: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

