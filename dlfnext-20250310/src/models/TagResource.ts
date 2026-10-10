// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TagResource extends $dara.Model {
  /**
   * @remarks
   * The resource ID, which is the data catalog ID.
   * 
   * @example
   * clg-paimon-0424965be0c240acb4159688c9e2c4b6
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type, which is fixed to CATALOGRESOURCE.
   * 
   * @example
   * CATALOGRESOURCE
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * team
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * recommendation
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'resourceId',
      resourceType: 'resourceType',
      tagKey: 'tagKey',
      tagValue: 'tagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

