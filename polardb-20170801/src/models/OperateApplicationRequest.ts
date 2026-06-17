// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * The operation type. Valid values:
   * 
   * * **restart**: restart
   * * **stop**: stop
   * * **start**: start.
   * 
   * @example
   * restart
   */
  operation?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      operation: 'Operation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      operation: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

