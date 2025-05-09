// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateExecutionRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the execution.
   * 
   * @example
   * Execution description
   */
  description?: string;
  /**
   * @remarks
   * The ID of the execution.
   * 
   * This parameter is required.
   * 
   * @example
   * exec-c223xxxxxxxxxxxxxxxx
   */
  executionId?: string;
  /**
   * @remarks
   * The information about the parameters.
   * 
   * @example
   * {"Status":"Running"}
   */
  parameters?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxsn4m*****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags of the execution.
   * 
   * @example
   * {"k1": "v1", "k2": "v2"}
   */
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      executionId: 'ExecutionId',
      parameters: 'Parameters',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      executionId: 'string',
      parameters: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tags: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

