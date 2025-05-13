// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPipelineResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 2020-08-05T03:10:38.188Z
   */
  gmtCreatedTime?: string;
  /**
   * @example
   * 2020-08-05T08:43:31.757Z
   */
  gmtUpdateTime?: string;
  /**
   * @remarks
   * The status of the pipeline. Supported:
   * 
   * *   NOT_DEPLOYED: The node is not deployed.
   * *   RUNNING
   * *   DELETED: Deleted. The console does not display this status.
   * 
   * @example
   * pipeline_test
   */
  pipelineId?: string;
  /**
   * @example
   * NOT_DEPLOYED
   */
  pipelineStatus?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreatedTime: 'gmtCreatedTime',
      gmtUpdateTime: 'gmtUpdateTime',
      pipelineId: 'pipelineId',
      pipelineStatus: 'pipelineStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreatedTime: 'string',
      gmtUpdateTime: 'string',
      pipelineId: 'string',
      pipelineStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

