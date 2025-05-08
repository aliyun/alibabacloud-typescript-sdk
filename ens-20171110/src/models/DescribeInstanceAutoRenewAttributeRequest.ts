// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceAutoRenewAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of an instance. Separate multiple IDs with semicolons (;).
   * 
   * This parameter is required.
   * 
   * @example
   * i-5ci7l7k1m9m2zmhp4iw3o****
   */
  instanceIds?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: 'string',
      ownerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

