// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PrecheckResourceCountShrinkRequest extends $dara.Model {
  /**
   * @example
   * ACS::ECS::Instance
   */
  resourceType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  tagResourceMatchersShrink?: string;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      tagResourceMatchersShrink: 'TagResourceMatchers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      tagResourceMatchersShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

