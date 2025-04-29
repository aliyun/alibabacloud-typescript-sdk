// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { StartImagePipelineExecutionRequestTag } from "./StartImagePipelineExecutionRequestTag";
import { StartImagePipelineExecutionRequestTemplateTag } from "./StartImagePipelineExecutionRequestTemplateTag";


export class StartImagePipelineExecutionRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but make sure that the token is unique among requests. **The token can contain only ASCII characters and cannot exceed 64 characters in length.** For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the image template.
   * 
   * This parameter is required.
   * 
   * @example
   * ip-2ze5tsl5bp6nf2b3****
   */
  imagePipelineId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent list of regions.
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
   * The tags.
   */
  tag?: StartImagePipelineExecutionRequestTag[];
  /**
   * @remarks
   * >  This parameter is deprecated.
   * 
   * @deprecated
   */
  templateTag?: StartImagePipelineExecutionRequestTemplateTag[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      imagePipelineId: 'ImagePipelineId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
      templateTag: 'TemplateTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      imagePipelineId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': StartImagePipelineExecutionRequestTag },
      templateTag: { 'type': 'array', 'itemType': StartImagePipelineExecutionRequestTemplateTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    if(Array.isArray(this.templateTag)) {
      $dara.Model.validateArray(this.templateTag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

