// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveInstanceSDGResponseBodyDataResultFailedItems extends $dara.Model {
  /**
   * @remarks
   * The error message that is returned.
   * 
   * @example
   * sdg not found
   */
  errMessage?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * aic-xxxxx-0
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      errMessage: 'ErrMessage',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errMessage: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

