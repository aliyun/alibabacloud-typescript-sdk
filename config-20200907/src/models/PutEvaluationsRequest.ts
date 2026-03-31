// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutEvaluationsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the delete mode. Valid values:
   * 
   * *   true: enables the delete mode
   * *   false (default): disables the delete mode
   * 
   * > This parameter is valid only when you manually trigger or periodically trigger custom rules to evaluate resources. If you enable the delete mode, the evaluation results that are not updated during the current evaluation are automatically deleted.
   * 
   * @example
   * false
   */
  deleteMode?: boolean;
  /**
   * @remarks
   * The evaluation results.
   * 
   * @example
   * [{"accountId":120886317861****,"annotation":"The flow log is not enabled.","complianceResourceId":"flowlog-o6wdfo1yvgo4i8****","complianceResourceType":"ACS::CEN::Flowlog","complianceRegionId":"cn-shanghai","complianceType":"NON_COMPLIANT","orderingTimestamp":1588907220408}]
   */
  evaluations?: string;
  /**
   * @remarks
   * The callback token. When Cloud Config triggers a custom rule to evaluate resources, the token information is sent to Function Compute as an input parameter. The token must be specified when you submit the evaluation results.
   * 
   * This parameter is required.
   * 
   * @example
   * =lAUbfkWp7GL9AFoQEIStinqBMc4FC8sHvip/1F1npkWUDNS2GEm6xwL6Zl/fSr0bbkWY+aiCLjTJxnp4H/yp/8p/Q8VCAtqG5uhRii4sfnYRnTPnE****
   */
  resultToken?: string;
  static names(): { [key: string]: string } {
    return {
      deleteMode: 'DeleteMode',
      evaluations: 'Evaluations',
      resultToken: 'ResultToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteMode: 'boolean',
      evaluations: 'string',
      resultToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

