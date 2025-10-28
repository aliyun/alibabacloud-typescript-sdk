// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ContinuePipelineRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to release the next batch. Valid values:
   * 
   * *   true: releases the next batch.
   * *   false: does not release the next batch.
   * 
   * @example
   * true
   */
  confirm?: boolean;
  /**
   * @remarks
   * The ID of the change process. You can call the GetChangeOrderInfo operation to query the ID of the change process that corresponds to a specific batch. For more information, see [GetChangeOrderInfo](https://help.aliyun.com/document_detail/62072.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 5648dbd7-df13********************
   */
  pipelineId?: string;
  static names(): { [key: string]: string } {
    return {
      confirm: 'Confirm',
      pipelineId: 'PipelineId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confirm: 'boolean',
      pipelineId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

