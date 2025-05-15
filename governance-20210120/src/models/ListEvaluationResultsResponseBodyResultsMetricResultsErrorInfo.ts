// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEvaluationResultsResponseBodyResultsMetricResultsErrorInfo extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * EcsInsightEnableFailed
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Unable to enable ECS Insight due to a server error.
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

