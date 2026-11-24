// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAIAppJobRequest extends $dara.Model {
  /**
   * @remarks
   * The task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 68ca759e798b40b4903b255*******
   */
  jobId?: string;
  /**
   * @remarks
   * Specifies whether to return only the task results. If you set this parameter to true, the response does not include the results of each node.
   * 
   * @example
   * true
   */
  onlyOutputs?: boolean;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      onlyOutputs: 'OnlyOutputs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      onlyOutputs: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

