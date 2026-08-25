// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServerIdeEcsSpecsRequest extends $dara.Model {
  /**
   * @remarks
   * The accelerator type. Valid values:
   * - CPU: uses only CPU.
   * - GPU: uses GPU acceleration.
   * 
   * @example
   * CPU
   */
  acceleratorType?: string;
  /**
   * @remarks
   * The maximum number of records to return in a single request.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token used to retrieve the next page of results. You do not need to specify this parameter for the first request.
   * 
   * @example
   * CAESG****
   */
  nextToken?: string;
  /**
   * @remarks
   * The DataWorks resource group identifier. You can specify the numeric ID of the resource group or the full identifier in the Serverless_res_group_{tenantId}_{resgId} format.
   * 
   * This parameter is required.
   * 
   * @example
   * Serverless_res_group_123456789012345_9876543210****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorType: 'AcceleratorType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorType: 'string',
      maxResults: 'number',
      nextToken: 'string',
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

