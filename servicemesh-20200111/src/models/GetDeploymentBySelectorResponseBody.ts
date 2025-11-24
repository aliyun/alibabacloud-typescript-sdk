// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeploymentBySelectorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried workloads.
   */
  deploymentNameList?: Buffer[];
  /**
   * @remarks
   * The end-of-data marker.
   * 
   * @example
   * eyJ2IjoibWV0YS5rOHMuaW8vdjEiLCJydiI6NTgyMDUzMzk5MCwic3RhcnQiOiJwbXMtYWRhcHRlci1kZGxsXHUwMDA****
   */
  mark?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 946690C2-41D3-55A0-A501-E2FFAB5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deploymentNameList: 'DeploymentNameList',
      mark: 'Mark',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentNameList: { 'type': 'array', 'itemType': 'Buffer' },
      mark: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.deploymentNameList)) {
      $dara.Model.validateArray(this.deploymentNameList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

