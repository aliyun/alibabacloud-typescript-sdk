// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePortRangeListAssociationsResponseBodyPortRangeListAssociations extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * sg-2zefu72****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource. Valid value: SecurityGroup.
   * 
   * @example
   * SecurityGroup
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

