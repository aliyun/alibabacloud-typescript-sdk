// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteInstanceAclRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the authorized resource.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  resourceName?: string;
  /**
   * @remarks
   * The type of the authorized resource.
   * 
   * This parameter is required.
   * 
   * @example
   * Topic
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceName: 'resourceName',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceName: 'string',
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

