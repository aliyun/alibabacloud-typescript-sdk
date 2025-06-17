// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfirmPipelineBatchRequest extends $dara.Model {
  /**
   * @remarks
   * true
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  confirm?: boolean;
  /**
   * @remarks
   * The ID of the batch. You can call the [DescribeChangeOrder](https://www.alibabacloud.com/help/zh/sae/serverless-app-engine-classic/developer-reference/api-sae-2019-05-06-describechangeorder-old?spm=a2c63.p38356.help-menu-search-118957.d_0) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * e2e-vds-feh-***
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

