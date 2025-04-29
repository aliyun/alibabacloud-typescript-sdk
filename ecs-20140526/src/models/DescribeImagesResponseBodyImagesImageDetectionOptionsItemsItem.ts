// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImagesResponseBodyImagesImageDetectionOptionsItemsItem extends $dara.Model {
  /**
   * @remarks
   * The name of the check item.
   * 
   * @example
   * Nvme
   */
  name?: string;
  /**
   * @remarks
   * The risk that the check item may have.
   * 
   * @example
   * NVMe.NotInstallded
   */
  riskCode?: string;
  /**
   * @remarks
   * The severity of the risk that the check item of the imported custom image has. If the check item is at risk, this parameter is returned. If the check item is not at risk, this parameter is not returned.
   * 
   * Valid values:
   * 
   * *   High: The check item is a high-risk item that may affect the startup of the instance. We recommend that you handle the risk.
   * *   Medium: The check item is a medium-risk item that may affect the startup performance or configurations of the instance. We recommend that you handle the risk.
   * 
   * @example
   * High
   */
  riskLevel?: string;
  /**
   * @remarks
   * The result of the check item.
   * 
   * @example
   * Supported
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      riskCode: 'RiskCode',
      riskLevel: 'RiskLevel',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      riskCode: 'string',
      riskLevel: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

