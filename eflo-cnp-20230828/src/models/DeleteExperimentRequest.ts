// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteExperimentRequest extends $dara.Model {
  /**
   * @remarks
   * Plan ID
   * 
   * This parameter is required.
   * 
   * @example
   * 234
   */
  experimentId?: number;
  /**
   * @remarks
   * Resource Group Id
   * 
   * @example
   * rg-sdkfjgnvd24
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      experimentId: 'ExperimentId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experimentId: 'number',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

