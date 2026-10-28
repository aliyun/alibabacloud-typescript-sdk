// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceGroupShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable AI workspace data. This parameter is optional. Default value: true.
   * 
   * @example
   * true
   */
  isAIWorkspaceDataEnabled?: boolean;
  /**
   * @remarks
   * The list of tags to be added. A maximum of 20 tags can be added.
   */
  tagShrink?: string;
  static names(): { [key: string]: string } {
    return {
      isAIWorkspaceDataEnabled: 'IsAIWorkspaceDataEnabled',
      tagShrink: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isAIWorkspaceDataEnabled: 'boolean',
      tagShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

