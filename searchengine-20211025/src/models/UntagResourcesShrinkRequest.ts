// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagResourcesShrinkRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  all?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  resourceIdShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  tagKeyShrink?: string;
  static names(): { [key: string]: string } {
    return {
      all: 'all',
      resourceIdShrink: 'resourceId',
      resourceType: 'resourceType',
      tagKeyShrink: 'tagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      resourceIdShrink: 'string',
      resourceType: 'string',
      tagKeyShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

