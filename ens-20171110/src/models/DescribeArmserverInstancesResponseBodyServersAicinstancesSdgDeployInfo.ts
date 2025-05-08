// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeARMServerInstancesResponseBodyServersAICInstancesSdgDeployInfo extends $dara.Model {
  /**
   * @remarks
   * The ID of the SDG.
   * 
   * @example
   * sdg-xxxxx
   */
  SDGId?: string;
  /**
   * @remarks
   * The deployment status of the SDG. Valid values:
   * 
   * *   **sdg_deploying**
   * *   **failed**
   * *   **success**
   * 
   * @example
   * success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      SDGId: 'SDGId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SDGId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

