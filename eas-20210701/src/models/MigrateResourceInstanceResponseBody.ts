// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MigrateResourceInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IDs of the instances.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The message returned for the request.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 40325405-579C-4D82***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

