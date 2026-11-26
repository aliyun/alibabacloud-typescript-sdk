// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSupportFeaturesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * gp-bp12ga6v69h86****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 63E5BE60-91FF-57F1-B873-7F1EB734B93D_2724
   */
  requestId?: string;
  /**
   * @remarks
   * The features supported by the current instance. Currently, you can query only the following features:
   * 
   * - sample_data: Sample dataset. For more information, see [Sample dataset](https://help.aliyun.com/document_detail/452278.html).
   * - diagnose_and_optimize: Diagnostics and optimization. For more information, see [Diagnostics and optimization](https://help.aliyun.com/document_detail/323453.html).
   * 
   * @example
   * [ "sample_data", "diagnose_and_optimize" ]
   */
  supportFeatureList?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      requestId: 'RequestId',
      supportFeatureList: 'SupportFeatureList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      requestId: 'string',
      supportFeatureList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

