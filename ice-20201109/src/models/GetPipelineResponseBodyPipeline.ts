// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPipelineResponseBodyPipeline extends $dara.Model {
  /**
   * @remarks
   * The time when the template was created.
   * 
   * @example
   * 2022-07-12T16:17:54Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the template was last modified.
   * 
   * @example
   * 2022-07-12T16:17:54Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The name of the MPS queue.
   * 
   * @example
   * test-pipeline
   */
  name?: string;
  /**
   * @remarks
   * The ID of the MPS queue.
   * 
   * @example
   * ****20b48fb04483915d4f2cd8ac****
   */
  pipelineId?: string;
  /**
   * @remarks
   * The priority of the MPS queue. Valid values: 1 to 10.
   * 
   * @example
   * 6
   */
  priority?: number;
  /**
   * @remarks
   * The type of the MPS queue.
   * 
   * Valid values:
   * 
   * *   Standard: standard MPS queue.
   * *   Boost: MPS queue with transcoding speed boosted.
   * *   NarrowBandHDV2: MPS queue that supports Narrowband HD 2.0.
   * 
   * @example
   * Standard
   */
  speed?: string;
  /**
   * @remarks
   * The state of the MPS queue.
   * 
   * Valid values:
   * 
   * *   Active
   * *   Paused
   * 
   * @example
   * Active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      modifiedTime: 'ModifiedTime',
      name: 'Name',
      pipelineId: 'PipelineId',
      priority: 'Priority',
      speed: 'Speed',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      modifiedTime: 'string',
      name: 'string',
      pipelineId: 'string',
      priority: 'number',
      speed: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

