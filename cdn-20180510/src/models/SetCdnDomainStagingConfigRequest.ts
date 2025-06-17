// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetCdnDomainStagingConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The accelerated domain name. You can specify only one domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The features that you want to configure. Format:
   * 
   * > *   **functionName**: The name of the feature. Separate multiple values with commas (,). For more information, see [A list of features](https://help.aliyun.com/document_detail/388460.html).
   * >*   **argName**: The feature parameters for **functionName**.
   * >*   **argValue**: The parameter values set for **functionName**.
   * 
   *         [
   *          {
   *            "functionArgs": [
   *             {
   *              "argName": "Parameter A", 
   *              "argValue": "Value of Parameter A"
   *             }, 
   *           {
   *             "argName": "Parameter B", 
   *             "argValue": "Value of Parameter B"
   *              }
   *          ], 
   *          "functionName": "Feature name"
   *             }
   *         ]
   * 
   * This parameter is required.
   * 
   * @example
   * [{"functionArgs":[{"argName":"enable","argValue":"on"},{"argName":"pri","argValue":"1"},{"argName":"rule","argValue":"xxx"}],"functionName":"edge_function"}]
   */
  functions?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      functions: 'Functions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      functions: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

