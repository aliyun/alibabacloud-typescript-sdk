// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopEdgeTranscodeJobRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the data center.
   * 
   * This parameter is required.
   * 
   * @example
   * ******3b-4d18-395c-8106-ff21a6******
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the edge transcoding task.
   * 
   * This parameter is required.
   * 
   * @example
   * ****20b48fb04483915d4f2cd8ac****
   */
  jobId?: string;
  ownerId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      jobId: 'JobId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      jobId: 'string',
      ownerId: 'number',
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

