// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfirmPipelineBatchRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to start the next batch. Valid values:
   * 
   * - **true**: Start the next batch.
   * 
   * - **false**: Terminate the process.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  confirm?: boolean;
  /**
   * @remarks
   * The pipeline ID. To obtain the ID, call the <props="china">[DescribeChangeOrder](https://help.aliyun.com/zh/sae/serverless-app-engine-upgrade/developer-reference/api-sae-2019-05-06-describechangeorder?spm=a2c4g.11186623.help-menu-search-118957.d_0)<props="intl">[DescribeChangeOrder](https://www.alibabacloud.com/help/zh/sae/serverless-app-engine-classic/developer-reference/api-sae-2019-05-06-describechangeorder-old?spm=a2c63.p38356.help-menu-search-118957.d_0) operation.
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

