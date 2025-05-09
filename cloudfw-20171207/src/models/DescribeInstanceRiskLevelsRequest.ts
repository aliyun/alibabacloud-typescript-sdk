// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceRiskLevelsRequestInstances } from "./DescribeInstanceRiskLevelsRequestInstances";


export class DescribeInstanceRiskLevelsRequest extends $dara.Model {
  /**
   * @remarks
   * The information about the instances.
   */
  instances?: DescribeInstanceRiskLevelsRequestInstances[];
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * en
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': DescribeInstanceRiskLevelsRequestInstances },
      lang: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

