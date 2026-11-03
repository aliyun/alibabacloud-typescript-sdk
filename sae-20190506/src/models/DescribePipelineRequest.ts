// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePipelineRequest extends $dara.Model {
  /**
   * @remarks
   * The batch ID. You can retrieve the ID by calling the [DescribeChangeOrder](https://help.aliyun.com/document_detail/126617.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 917660ba-5092-44ca-b8e0-80012c96****
   */
  pipelineId?: string;
  static names(): { [key: string]: string } {
    return {
      pipelineId: 'PipelineId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

