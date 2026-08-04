// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceGroupShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Optional. Defaults to `true`.
   * 
   * @example
   * true
   */
  isAIWorkspaceDataEnabled?: boolean;
  /**
   * @remarks
   * A list of up to 20 tags to add to the instance.
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

