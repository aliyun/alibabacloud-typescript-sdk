// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteModelOperatorServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the model operator service to be released. You can obtain the ID by calling ListModelOperatorServices. The service must belong to the current account and the requested region.
   * 
   * This parameter is required.
   * 
   * @example
   * adbpg-mo-123456789abc
   */
  serviceId?: string;
  static names(): { [key: string]: string } {
    return {
      serviceId: 'ServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

