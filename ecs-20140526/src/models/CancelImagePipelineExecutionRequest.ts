// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CancelImagePipelineExecutionRequestTemplateTag } from "./CancelImagePipelineExecutionRequestTemplateTag";


export class CancelImagePipelineExecutionRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the image building task.
   * 
   * This parameter is required.
   * 
   * @example
   * exec-5fb8facb8ed7427c****
   */
  executionId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * >  This parameter is not publicly available.
   */
  templateTag?: CancelImagePipelineExecutionRequestTemplateTag[];
  static names(): { [key: string]: string } {
    return {
      executionId: 'ExecutionId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      templateTag: 'TemplateTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      templateTag: { 'type': 'array', 'itemType': CancelImagePipelineExecutionRequestTemplateTag },
    };
  }

  validate() {
    if(Array.isArray(this.templateTag)) {
      $dara.Model.validateArray(this.templateTag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

