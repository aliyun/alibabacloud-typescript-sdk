// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisAssociateTagOptionFromResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource with which the tag option is associated.
   * 
   * This parameter is required.
   * 
   * @example
   * prod-bp14katy3d****
   */
  resourceId?: string;
  /**
   * @remarks
   * The ID of the tag option.
   * 
   * This parameter is required.
   * 
   * @example
   * tag-bp1u6mdf3d****
   */
  tagOptionId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      tagOptionId: 'TagOptionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      tagOptionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

